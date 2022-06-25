using System.Collections.Generic;
namespace Rookies.eCommerce.Domain;
public class Feedback
{
    public int Id { get; set; }
    public int ProductId { get; set; }
    public int CustomerId { get; set; }
    public string? Comment { get; set; }
    public int Rating { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime UpdatedDate { get; set; }
    public bool Status { get; set; }

    public virtual Product? Product { get; set; }
}

