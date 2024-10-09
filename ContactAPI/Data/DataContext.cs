using System;
using Microsoft.EntityFrameworkCore;
using Contact.Api.Entities;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {

    }

    public DbSet<Item> Items { get; set; }
}
