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
    public class ProductController : ControllerBase
    {
        public readonly EFContext _context;
        public ProductController(EFContext context)
        {
            _context = context;
        }
        // tim toan bo Product
        [HttpGet]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult<List<Product>>> GetAll()
        {
            return Ok(await _context.Products.ToListAsync());
        }
        // lay Product 
        [HttpGet("{id}")]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var item = await _context.Products.FindAsync(id);
            if (item == null)
            {
                return BadRequest("Product not found.");
            }
            return Ok(item);
        }
        // them Product
        [HttpPost]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult<Product>> AddProduct([FromBody] Product item)
        {
            item.CreatedDate = DateTime.Now;
            item.UpdatedDate = DateTime.Now;
            _context.Products.Add(item);
            await _context.SaveChangesAsync();
            return Ok(await _context.Products.ToListAsync());
        }
        // cap nhat Product
        [HttpPut("{id}")]
        [EnableCors("MyPolicy")]

        public async Task<ActionResult<Product>> UpdateProduct(int id, [FromBody] Product request)
        {
            var item = await _context.Products.FindAsync(id);
            if (item == null)
            {
                return BadRequest("Product not found.");
            }

            item.Name = request.Name;
            item.Price = request.Price;
            item.PromotionPrice = request.PromotionPrice;
            item.Quantity = request.Quantity;
            item.Description = request.Description;
            item.Detail = request.Detail;
            item.BrandId = request.BrandId;
            item.CategoryId = request.CategoryId;
            item.UpdatedDate = DateTime.Now;

            //item.ParentId = request.ParentId;
            _context.Entry(item).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return NoContent();
        }
        // Xoa Product
        [HttpDelete("{id}")]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult> DeleteProduct(int id)
        {
            var item = await _context.Products.FindAsync(id);
            if (item == null)
            {
                return BadRequest("Product not found.");
            }
            _context.Products.Remove(item);

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}