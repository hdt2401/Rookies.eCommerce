using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;

namespace Rookies.eCommerce.Client.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly HttpClient _http;
        public List<Rookies.eCommerce.Domain.Category> DBCategory = new List<Rookies.eCommerce.Domain.Category>();
        public List<Rookies.eCommerce.Domain.Product> DBProduct = new List<Rookies.eCommerce.Domain.Product>();

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public async Task<ActionResult> OnGet()
        {
            var _http = new HttpClient();
            _http.BaseAddress = new Uri("https://localhost:7276");

            var res = await _http.GetAsync("api/Category");
            var result = res.Content.ReadAsStringAsync().Result;
            DBCategory = JsonConvert.DeserializeObject<List<Rookies.eCommerce.Domain.Category>>(result);
            DBProduct = JsonConvert.DeserializeObject<List<Rookies.eCommerce.Domain.Product>>(result);

            return Page();
        }
    }
}