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
        [HttpGet("id")]
        public async Task<ActionResult<List<Category>>> GetAccount(int id)
        {
            var acc = await _context.Categories.FindAsync(id);
            if (acc == null)
            {
                return BadRequest("Category not found.");
            }
            return Ok(acc);
        }
        // them Category
        [HttpPost]
        public async Task<ActionResult<List<Category>>> AddAccount(Category account)
        {
            _context.Categories.Add(account);
            await _context.SaveChangesAsync();
            return Ok(await _context.Categories.ToListAsync());
        }
        // cap nhat Category
        [HttpPut("id")]
        public async Task<ActionResult<List<Category>>> UpdateAccount(Category request)
        {
            var acc = await _context.Categories.FindAsync(request.Id);
            if (acc == null)
            {
                return BadRequest("Category not found.");
            }

            acc.Name = request.Name;

            await _context.SaveChangesAsync();

            return Ok(await _context.Categories.ToListAsync());
        }
        // Xoa Category
        [HttpDelete("id")]
        public async Task<ActionResult<List<Category>>> DeleteAccount(int id)
        {
            var acc = await _context.Categories.FindAsync(id);
            if (acc == null)
            {
                return BadRequest("Category not found.");
            }
            _context.Categories.Remove(acc);

            await _context.SaveChangesAsync();

            return Ok(await _context.Categories.ToListAsync());
        }
    }
}