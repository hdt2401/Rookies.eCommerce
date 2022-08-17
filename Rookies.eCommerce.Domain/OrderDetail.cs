using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Rookies.eCommerce.Domain;
public class OrderDetail
{
    public int Id { get; set; }
    [ForeignKey("OrderId")]
    public int OrderId { get; set; }
    [ForeignKey("ProductId")]
    public int ProductId { get; set; }
    public int Price { get; set; }
    public int Quantity { get; set; }
    public Order Order { get; set; }
    public Product Product { get; set; }
}

