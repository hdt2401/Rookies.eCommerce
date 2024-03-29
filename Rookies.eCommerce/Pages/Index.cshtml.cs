﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;

namespace Rookies.eCommerce.Client.Pages
{
    public class IndexModel : PageModel
    {
        private readonly HttpClient _http;
        public List<Rookies.eCommerce.Domain.Product> DBProduct = new List<Rookies.eCommerce.Domain.Product>();

        public async Task<ActionResult> OnGetAsync(int id)
        {
            var _http = new HttpClient();
            _http.BaseAddress = new Uri("https://localhost:7276");
            var res = await _http.GetAsync($"api/Product/GetCategory/{id}");
            var result = res.Content.ReadAsStringAsync().Result;
            DBProduct = JsonConvert.DeserializeObject<List<Rookies.eCommerce.Domain.Product>>(result);

            return Page();
        }
    }
}