using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rookies.eCommerce.Data;
using Rookies.eCommerce.Domain;
using System.Linq;

namespace Rookies.eCommerce.Controllers
{
    public class CategoryController : Controller
    {
        public readonly EFContext _context;
        public CategoryController(EFContext context)
        {
            _context = context;
        }
        [HttpGet("/category")]
        public IActionResult Index()
        {
            var category = _context.Categories.ToList();
            return View(category);
        }
        [HttpGet("/category/create")]
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost("/category/create")]
        public IActionResult Create(string name)
        {
            _context.Categories.Add(new Category
            {
                Name = name,
                ParentId = 1,
                CreatedDate = DateTime.Now,
                UpdatedDate = DateTime.Now,
            });
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        //[HttpPost("/category/delete/{id}")]
        [HttpPost]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            var category = await _context.Categories.FindAsync(id);
            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
    }
}
