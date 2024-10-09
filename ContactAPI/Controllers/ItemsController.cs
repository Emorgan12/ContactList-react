using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contact.Api.Entities;
using Contact.Api.Repos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Contact.Api.Controllers
{
    [ApiController]
    [Route("items")]
    public class ItemsController : ControllerBase
    {
        private readonly IItemsRepository repository;
        private readonly ILogger<ItemsController> logger;

        public ItemsController(IItemsRepository repository, ILogger<ItemsController> logger)
        {
            this.repository = repository;
            this.logger = logger;
        }

        // GET /items
        [HttpGet]
        public async Task<IEnumerable<Item>> GetItemsAsync()
        {
            var items = (await repository.GetItemsAsync())
                        .Select(item => item);


            logger.LogInformation($"{DateTime.UtcNow.ToString("hh:mm:ss")}: Retrieved {items.Count()} items");

            return items;
        }

        // GET /items/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Item>> GetItemAsync(Guid id)
        {
            var item = await repository.GetItemAsync(id);

            if (item is null)
            {
                return NotFound();
            }

            return item;
        }

        // POST /items
        [HttpPost]
        public async Task<ActionResult<Item>> CreateItemAsync(Item item)
        {
            Item newItem = new()
            {
                Id = Guid.NewGuid(),
                Name = item.Name,
                Number = item.Number,
                CreatedDate = DateTimeOffset.UtcNow
            };

            await repository.CreateItemAsync(newItem);

            return CreatedAtAction(nameof(GetItemAsync), new { id = newItem.Id }, newItem);
        }

        // PUT /items/{id}
        [HttpPut("{id}, {name}, {number}")]
        public async Task<ActionResult<Item>> UpdateItemAsync(Guid id, string name, string number)
        {
            var existingItem = await repository.GetItemAsync(id);

            if (existingItem is null)
            {
                return NotFound();
            }

            existingItem.Name = name;
            existingItem.Number = number;

            await repository.UpdateItemAsync(existingItem);

            return NoContent();
        }

        // DELETE /items/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult<Item>> DeleteItemAsync(Guid id)
        {
            var existingItem = await repository.GetItemAsync(id);

            if (existingItem is null)
            {
                return NotFound();
            }

            await repository.DeleteItemAsync(id);

            return NoContent();
        }

        [HttpGet("searchName/{name}")]

        public async Task<IEnumerable<Item>> GetItemsByNameAsync(string name)
        {
            var items = (await repository.GetItemsAsync())
                        .Select(item => item);

            if (!string.IsNullOrWhiteSpace(name))
            {
                items = items.Where(item => item.Name.Contains(name, StringComparison.OrdinalIgnoreCase));
            }

            logger.LogInformation($"{DateTime.UtcNow.ToString("hh:mm:ss")}: Retrieved {items.Count()} items");

            return items;
        }
    }
}