using Contact.Api.Dtos;
using Contact.Api.Entities;

namespace Contact.Api
{
    public static class Extensions
    {
        public static ItemDto AsDto(this Item item)
        {
            return new ItemDto(item.Id, item.Name, item.Number, item.CreatedDate);
        }
    }
}