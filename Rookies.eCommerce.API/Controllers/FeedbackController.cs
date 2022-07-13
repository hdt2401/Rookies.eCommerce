using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rookies.eCommerce.Data;
using Rookies.eCommerce.Domain;
namespace Rookies.eCommerce.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : Controller
    {
        public readonly EFContext _context;
        public FeedbackController(EFContext context)
        {
            _context = context;
        }
        [HttpGet]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult<List<Feedback>>> GetAll()
        {
            return Ok(await _context.Feedbacks.ToListAsync());
        }
        // lay Feedback theo Product
        [HttpGet("GetFeedback/{id}")]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult<List<Feedback>>> GetFeedback(int id)
        {
            var feedbackList = await (from feedback in _context.Feedbacks
                                  where feedback.ProductId == id
                                  select feedback).ToListAsync();
            return Ok(feedbackList);
        }
        // them Feedback
        [HttpPost]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult<Feedback>> AddFeedback(int id, [FromBody] Feedback item)
        {
            item.CreatedDate = DateTime.Now;
            item.UpdatedDate = DateTime.Now;
            _context.Feedbacks.Add(item);
            await _context.SaveChangesAsync();
            return Ok(await _context.Feedbacks.ToListAsync());
        }
        // cap nhat Feedback
        [HttpPut("{id}")]
        [EnableCors("MyPolicy")]

        public async Task<ActionResult<Feedback>> UpdateFeedback(int id, [FromBody] Feedback request)
        {
            var item = await _context.Feedbacks.FindAsync(id);
            if (item == null)
            {
                return BadRequest("Feedback not found.");
            }

            item.UpdatedDate = DateTime.Now;
            item.Comment = request.Comment;
            _context.Entry(item).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return NoContent();
        }
        // Xoa Feedback
        [HttpDelete("{id}")]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult> DeleteFeedback(int id)
        {
            var item = await _context.Feedbacks.FindAsync(id);
            if (item == null)
            {
                return BadRequest("Feedback not found.");
            }
            _context.Feedbacks.Remove(item);

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
