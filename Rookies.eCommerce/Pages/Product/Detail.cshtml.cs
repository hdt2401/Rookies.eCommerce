using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;

namespace Rookies.eCommerce.Pages.Product
{
    public class DetailModel : PageModel
    {
        private readonly HttpClient _http;
        private readonly ILogger<DetailModel> _logger;
        public Rookies.eCommerce.Domain.Product product = new Rookies.eCommerce.Domain.Product();
        public DetailModel(ILogger<DetailModel> logger)
        {
            _logger = logger;
        }
        public async Task<ActionResult> OnGet(int id)
        {
            var _http = new HttpClient();
            _http.BaseAddress = new Uri("https://localhost:7276");
            var res = await _http.GetAsync($"api/Product/{id}");
            var result = res.Content.ReadAsStringAsync().Result;
            product = JsonConvert.DeserializeObject<Rookies.eCommerce.Domain.Product>(result);
            return Page();
        }
    }
}
