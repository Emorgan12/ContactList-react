using System;

namespace Contact.Api.Entities
{
    public class Item
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Number { get; set; }
        public DateTimeOffset CreatedDate { get; set; }
    }
}