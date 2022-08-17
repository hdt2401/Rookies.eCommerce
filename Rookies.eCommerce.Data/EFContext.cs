using Microsoft.EntityFrameworkCore;
using Rookies.eCommerce.Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
namespace Rookies.eCommerce.Data;

public class EFContext : IdentityDbContext<User>
{
    public EFContext(DbContextOptions<EFContext> options) : base(options)
    {
    }

    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Cart> Carts { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderDetail> OrderDetails { get; set; }
    public DbSet<Feedback> Feedbacks { get; set; }
}