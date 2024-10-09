using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Contact.Api.Entities;

namespace Contact.Api.Repos
{
    public interface IItemsRepository
    {
        Task<Item> GetItemAsync(Guid id);
        Task<IEnumerable<Item>> GetItemsAsync();
        Task CreateItemAsync(Item item);
        Task UpdateItemAsync(Item item);
        Task DeleteItemAsync(Guid id);
    }
}