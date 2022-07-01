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
        public async Task<ActionResult<List<Brand>>> GetAll()
        {
            return Ok(await _context.Brands.ToListAsync());
        }
        // lay Brand 
        [HttpGet("id")]
        public async Task<ActionResult<List<Brand>>> GetAccount(int id)
        {
            var acc = await _context.Brands.FindAsync(id);
            if (acc == null)
            {
                return BadRequest("Brand not found.");
            }
            return Ok(acc);
        }
        // them Brand
        [HttpPost]
        public async Task<ActionResult<List<Brand>>> AddAccount(Brand brand)
        {
            _context.Brands.Add(brand);
            await _context.SaveChangesAsync();
            return Ok(await _context.Brands.ToListAsync());
        }
        // cap nhat Brand
        [HttpPut("id")]
        public async Task<ActionResult<List<Brand>>> UpdateAccount(Brand request)
        {
            var acc = await _context.Brands.FindAsync(request.Id);
            if (acc == null)
            {
                return BadRequest("Brand not found.");
            }

            acc.Name = request.Name;

            await _context.SaveChangesAsync();

            return Ok(await _context.Brands.ToListAsync());
        }
        // Xoa Brand
        [HttpDelete("id")]
        public async Task<ActionResult<List<Brand>>> DeleteAccount(int id)
        {
            var acc = await _context.Brands.FindAsync(id);
            if (acc == null)
            {
                return BadRequest("Brand not found.");
            }
            _context.Brands.Remove(acc);

            await _context.SaveChangesAsync();

            return Ok(await _context.Brands.ToListAsync());
        }
    }
}