namespace Rookies.eCommerce.Domain;
public class Product
{
    public int Id { get; set; }
    public int CategoryId { get; set; }
    public int BrandId { get; set; }
    public string? Name { get; set; }
    public decimal Price { get; set; }
    public decimal PromotionPrice { get; set; }
    public int Quantity { get; set; }
    public string? Description { get; set; }
    public string? Detail { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime UpdatedDate { get; set; }
    public string? Image { get; set; }
    public virtual Brand? Brand { get; set; }
    public virtual Category? Category { get; set; }
    public virtual List<Feedback> Feedbacks { get; set; } = new List<Feedback>();
}

