using System;
using Microsoft.EntityFrameworkCore;
using Contact.Api.Entities;

namespace Contact.Api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Item> Items { get; set; }
    }
}