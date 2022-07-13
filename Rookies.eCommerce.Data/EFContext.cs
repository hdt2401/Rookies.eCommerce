using Microsoft.EntityFrameworkCore;
using Rookies.eCommerce.Domain;
using System;

namespace Rookies.eCommerce.Data;

public class EFContext : DbContext
{
    public EFContext(DbContextOptions<EFContext> options)
            : base(options)
    {
    }

    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Brand> Brands { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderDetail> OrderDetails { get; set; }
    public DbSet<Feedback> Feedbacks { get; set; }

    //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //{
    //    optionsBuilder.UseSqlServer(
    //          "Server=localhost;Database=DESKTOP-D16VB6B\\SQLEXPRESS;User Id=sa;Password=Ducthien241");
    //}
}