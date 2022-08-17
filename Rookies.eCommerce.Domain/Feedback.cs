using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Rookies.eCommerce.Domain;
public class Feedback
{
    public int Id { get; set; }
    [ForeignKey("ProductId")]
    public int ProductId { get; set; }
    [ForeignKey("UserId")]
    public int UserId { get; set; }
    public string Comment { get; set; }
    public int Rating { get; set; }
    public DateTime CreatedDate { get; set; }

    public Product Product { get; set; }
    public User User { get; set; }
}

