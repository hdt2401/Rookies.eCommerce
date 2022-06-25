using System.Collections.Generic;
namespace EFProject.Domain;
public class Order
{
    public int Id { get; set; }
    public DateTime OrderDate { get; set; }
    public bool Status { get; set; }
    public bool Delivered { get; set; }
    public DateTime DeliveredDate { get; set; }
    public int CustomerId { get; set; }
    public int Discount { get; set; }

    public virtual List<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();
}

