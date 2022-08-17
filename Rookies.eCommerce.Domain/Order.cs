using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Rookies.eCommerce.Domain;
public class Order
{
    public int Id { get; set; }
    public string ShipName { get; set; }
    public string ShipMobile { get; set; }
    public string ShipAddress { get; set; }
    public DateTime CreatedDate { get; set; }
    [ForeignKey("UserId")]
    public string UserId { get; set; }
    public List<OrderDetail> OrderDetails { get; set; }
    public User User { get; set; }
}

