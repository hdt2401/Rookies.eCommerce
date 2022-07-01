using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rookies.eCommerce.Data;
using Rookies.eCommerce.Domain;

namespace Rookies.eCommerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        public readonly EFContext _context;
        public ProductController(EFContext context)
        {
            _context = context;
        }
        // tim toan bo Product
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetAll()
        {
            return Ok(await _context.Products.ToListAsync());
        }
        // lay Product 
        [HttpGet("id")]
        public async Task<ActionResult<List<Product>>> GetAccount(int id)
        {
            var acc = await _context.Products.FindAsync(id);
            if (acc == null)
            {
                return BadRequest("Product not found.");
            }
            return Ok(acc);
        }
        // them Product
        [HttpPost]
        public async Task<ActionResult<List<Product>>> AddAccount(Product account)
        {
            _context.Products.Add(account);
            await _context.SaveChangesAsync();
            return Ok(await _context.Products.ToListAsync());
        }
        // cap nhat Product
        [HttpPut("id")]
        public async Task<ActionResult<List<Product>>> UpdateAccount(Product request)
        {
            var acc = await _context.Products.FindAsync(request.Id);
            if (acc == null)
            {
                return BadRequest("Product not found.");
            }

            acc.Name = request.Name;

            await _context.SaveChangesAsync();

            return Ok(await _context.Products.ToListAsync());
        }
        // Xoa Product
        [HttpDelete("id")]
        public async Task<ActionResult<List<Product>>> DeleteAccount(int id)
        {
            var acc = await _context.Products.FindAsync(id);
            if (acc == null)
            {
                return BadRequest("Product not found.");
            }
            _context.Products.Remove(acc);

            await _context.SaveChangesAsync();

            return Ok(await _context.Products.ToListAsync());
        }
    }
}