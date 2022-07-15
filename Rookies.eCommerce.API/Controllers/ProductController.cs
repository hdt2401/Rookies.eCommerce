using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rookies.eCommerce.API.Models;
using Rookies.eCommerce.Data;
using Rookies.eCommerce.Domain;

namespace Rookies.eCommerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        public readonly EFContext _context;
        public static IWebHostEnvironment _environment;
        public ProductController(EFContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }
        // tim toan bo Product
        [HttpGet]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult<List<Product>>> GetAll()
        {
            return Ok(await _context.Products.ToListAsync());
        }
        // tim toan bo Product theo Category
        [HttpGet("GetCategory/{id}")]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult<List<Product>>> GetProductByCategory(int? id)
        {
            var products = await (from product in _context.Products
                                  where product.CategoryId == id
                                  select product).ToListAsync();
            return Ok(products);
        }
        // tim toan bo Product theo Category
        [HttpGet("GetBrand/{id}")]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult<List<Product>>> GetProductByBrand(int id)
        {
            var products = await (from product in _context.Products
                                  join brand in _context.Brands on product.BrandId equals brand.Id
                                  where product.BrandId == id
                                  select product).ToListAsync();


            return Ok(products);
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

        // lay anh Product 
        [HttpGet("{id}/image")]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult> GetImageProduct(int id)
        {
            var item = await _context.Products.FindAsync(id);
            if (item == null)
            {
                return BadRequest("Product not found.");
            }
            string path = _environment.WebRootPath + "\\images\\";
            var filePath = path + item.Image;
            
            byte[] b = System.IO.File.ReadAllBytes(filePath);
            return File(b, "image/png");
            //return null;
        }

        // them Product
        [HttpPost]
        [EnableCors("MyPolicy")]
        public async Task<ActionResult<Product>> AddProduct([FromForm] Product product, IFormFile uploadFile)
        {
            if (uploadFile != null && uploadFile.Length > 0)
            {
                var fileName = Path.GetFileName(uploadFile.FileName);
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot/images/", fileName);

                product.Image = fileName;
                _context.Add(product);
                await _context.SaveChangesAsync();

                using (var fileSrteam = new FileStream(filePath, FileMode.Create))
                {
                    await uploadFile.CopyToAsync(fileSrteam);
                }
            }            
            return Ok(product);
        }
        
        // cap nhat Product
        [HttpPut("{id}")]
        [EnableCors("MyPolicy")]

        public async Task<ActionResult> UpdateProduct(int id, [FromForm] Product request, IFormFile uploadFile)
        {
            var item = await _context.Products.FindAsync(id);

            if (item == null)
            {
                return BadRequest("Product not found.");
            }

            if (uploadFile != null && uploadFile.Length > 0)
            {
                var fileName = Path.GetFileName(uploadFile.FileName);
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot/images/", fileName);


                item.BrandId = request.BrandId;
                item.CategoryId = request.CategoryId;
                item.Name = request.Name;
                item.Description = request.Description;
                item.Detail = request.Detail;
                item.Price = request.Price;
                item.PromotionPrice = request.PromotionPrice;
                item.Quantity = request.Quantity;
                item.Image = fileName;
                item.UpdatedDate = DateTime.Now;

                //_context.Add(request);
                _context.Entry(item).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await uploadFile.CopyToAsync(fileStream);
                }
            }

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