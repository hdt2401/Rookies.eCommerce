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
    public class BrandController : ControllerBase
    {
        public readonly EFContext _context;
        public BrandController(EFContext context)
        {
            _context = context;
        }
        // tim toan bo Brand
        [HttpGet]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult<List<Brand>>> GetAll()
        {
            return Ok(await _context.Brands.ToListAsync());
        }
        // lay Brand 
        [HttpGet("{id}")]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult<Brand>> GetBrand(int id)
        {
            var item = await _context.Brands.FindAsync(id);
            if (item == null)
            {
                return BadRequest("Brand not found.");
            }
            return Ok(item);
        }
        // them Brand
        [HttpPost]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult<Brand>> AddBrand([FromBody] Brand item)
        {
            //item.CreatedDate = DateTime.Now;
            //item.UpdatedDate = DateTime.Now;
            _context.Brands.Add(item);
            await _context.SaveChangesAsync();
            return Ok(await _context.Brands.ToListAsync());
        }
        // cap nhat Brand
        [HttpPut("{id}")]
        [EnableCors("MyPolicy")]

        public async Task<ActionResult<Brand>> UpdateBrand(int id, [FromBody] Brand request)
        {
            var item = await _context.Brands.FindAsync(id);
            if (item == null)
            {
                return BadRequest("Brand not found.");
            }

            //item.UpdatedDate = DateTime.Now;
            item.Name = request.Name;
            //item.ParentId = request.ParentId;
            _context.Entry(item).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return NoContent();
        }
        // Xoa Brand
        [HttpDelete("{id}")]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult> DeleteBrand(int id)
        {
            var item = await _context.Brands.FindAsync(id);
            if (item == null)
            {
                return BadRequest("Brand not found.");
            }
            _context.Brands.Remove(item);

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}