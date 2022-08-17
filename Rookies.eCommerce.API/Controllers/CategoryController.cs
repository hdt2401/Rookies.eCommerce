using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rookies.eCommerce.Data;
using Rookies.eCommerce.Domain;

namespace Rookies.eCommerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        public readonly EFContext _context;
        public CategoryController(EFContext context)
        {
            _context = context;
        }
        // tim toan bo Category
        [HttpGet]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult<List<Category>>> GetAll()
        {
            return Ok(await _context.Categories.ToListAsync());
        }
        // lay Category 
        [HttpGet("{id}")]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult<Category>> GetCategory(int id)
        {
            var item = await _context.Categories.FindAsync(id);
            if (item == null)
            {
                return BadRequest("Category not found.");
            }
            return Ok(item);
        }
        // them Category
        [HttpPost]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult<Category>> AddCategory([FromBody] Category item)
        {
            item.CreatedDate = DateTime.Now;
            item.UpdatedDate = DateTime.Now;
            _context.Categories.Add(item);
            await _context.SaveChangesAsync();
            return Ok(await _context.Categories.ToListAsync());
        }
        // cap nhat Category
        [HttpPut("{id}")]
        [EnableCors("MyPolicy")]

        public async Task<ActionResult<Category>> UpdateCategory(int id, [FromBody] Category request)
        {
            var item = await _context.Categories.FindAsync(id);
            if (item == null)
            {
                return BadRequest("Category not found.");
            }

            item.Name = request.Name;
            item.Description = request.Name;
            item.UpdatedDate=DateTime.Now;

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }
        // Xoa Category
        [HttpDelete("{id}")]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult> DeleteCategory(int id)
        {
            var item = await _context.Categories.FindAsync(id);
            if (item == null)
            {
                return BadRequest("Category not found.");
            }
            _context.Categories.Remove(item);

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}