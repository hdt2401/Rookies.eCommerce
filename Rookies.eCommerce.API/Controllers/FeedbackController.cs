using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rookies.eCommerce.Data;
using Rookies.eCommerce.Domain;
using System.Security.Claims;

namespace Rookies.eCommerce.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : Controller
    {
        public readonly EFContext _context;
        public readonly IHttpContextAccessor _httpContext;
        public FeedbackController(EFContext context, IHttpContextAccessor httpContext)
        {
            _context = context;
            _httpContext = httpContext;
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
        public async Task<ActionResult<Feedback>> AddFeedback([FromBody] Feedback item)
        {
            var currentUser = await GetCurrentUserAsync();
            var userId = currentUser.Id;
            item.UserId = int.Parse(userId);
            item.CreatedDate = DateTime.Now;
            _context.Feedbacks.Add(item);
            await _context.SaveChangesAsync();
            return Ok(item);
        }
        private async Task<User> GetCurrentUserAsync()
        {
            var accountId = _httpContext.HttpContext.User?.FindFirstValue(ClaimTypes.NameIdentifier);
            return await _context.Users.Where(x => x.Id == accountId).FirstOrDefaultAsync();
        }

    }
}
