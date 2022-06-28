﻿using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Rookies.eCommerce.Models;
using Rookies.eCommerce.Data;

namespace Rookies.eCommerce.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly EFContext _context;

    public HomeController(ILogger<HomeController> logger, EFContext context)
    {
        _logger = logger;
        _context = context;
    }

    public IActionResult Index()
    {
        var products = _context.Products.ToList();
        return View(products);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

