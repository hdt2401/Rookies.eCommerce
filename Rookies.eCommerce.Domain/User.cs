using System.Collections.Generic;
namespace Rookies.eCommerce.Domain;
public class User
{
    public int Id { get; set; }
    public string? Name { get; set; }

    public virtual List<Product> Products { get; set; } = new List<Product>();
}

