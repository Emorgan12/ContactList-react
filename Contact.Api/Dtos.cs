using System;
using System.ComponentModel.DataAnnotations;

namespace Contact.Api.Dtos
{
    public record ItemDto(Guid Id, string Name, string Number, DateTimeOffset CreatedDate);
    public record CreateItemDto([Required] string Name, [Length(11,11)] string Number);
    public record UpdateItemDto([Required] string Name, [Length(11,11)] string Number);
}