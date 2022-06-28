using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Rookies.eCommerce.Data;
using Rookies.eCommerce.Domain;

namespace Rookies.eCommerce.Controllers
{
    public class BrandController : Controller
    {
        // GET: BrandController
        public readonly EFContext _context;
        public BrandController(EFContext context)
        {
            _context = context;
        }
        [HttpGet("/brand")]
        public IActionResult Index()
        {
            var brand = _context.Brands.ToList();
            return View(brand);
        }
        [HttpGet("/brand/create")]
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost("/brand/create")]
        public IActionResult Create(string name)
        {
            _context.Brands.Add(new Brand
            {
                Name = name
            });
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
