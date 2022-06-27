using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rookies.eCommerce.Data;

namespace Rookies.eCommerce.Controllers
{
    public class ProductController : Controller
    {
        private readonly EFContext _context;

        public ProductController(EFContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            return View();
        }
        public async Task<IActionResult> Detail(int id)
        {
            if (id == null)
            {
                return View("not found");
            }

            var product = await _context.Products.FirstOrDefaultAsync(m => m.Id == id);
            if (product == null)
            {
                return View("not found");
            }
            ViewData["Title"] = product.Name;

            return View(product);
        }
    }
}
