﻿namespace Rookies.eCommerce.Domain;
public class Category
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Description { get; set; }
    public int ParentId { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime UpdatedDate { get; set; }

    public virtual List<Product> Products { get; set; } = new List<Product>();
}

