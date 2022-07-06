using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;

namespace Rookies.eCommerce.Pages.Product
{
    public class IndexModel : PageModel
    {
        private readonly HttpClient _http;
        public List<Rookies.eCommerce.Domain.Product> DBCategory = new List<Rookies.eCommerce.Domain.Product>();
        public async Task<IActionResult> OnGet()
        {
            var _http = new HttpClient();
            _http.BaseAddress = new Uri("https://localhost:7276");

            var res = await _http.GetAsync("api/Product");
            var result = res.Content.ReadAsStringAsync().Result;
            DBCategory = JsonConvert.DeserializeObject<List<Rookies.eCommerce.Domain.Product>>(result);

            return Page();
        }
    }
}