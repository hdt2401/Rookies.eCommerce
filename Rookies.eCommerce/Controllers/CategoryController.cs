﻿using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Rookies.eCommerce.Data;
using Rookies.eCommerce.Models;

namespace Rookies.eCommerce.Controllers;

public class CategoryController : Controller
{
    private readonly ILogger<CategoryController> _logger;
    public readonly EFContext _context;

    public CategoryController(ILogger<CategoryController> logger, EFContext context)
    {
        _logger = logger;
        _context = context;
    }

    public IActionResult Index(int id)
    {
        var list = _context.Products.FirstOrDefault(m => m.Id == id);
        return View(list);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
