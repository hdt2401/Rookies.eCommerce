using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Rookies.eCommerce.Domain;

namespace Rookies.eCommerce.Pages.Category
{
    public class IndexModel : PageModel
    {
        private readonly HttpClient _http;
        public List<Rookies.eCommerce.Domain.Category> DBCategory = new List<Rookies.eCommerce.Domain.Category>();


        public async Task<IActionResult> OnGet()
        {
            var _http = new HttpClient();
            _http.BaseAddress = new Uri("https://localhost:7276");

            var res = await _http.GetAsync("api/Category");
            var result = res.Content.ReadAsStringAsync().Result;
            DBCategory = JsonConvert.DeserializeObject<List<Rookies.eCommerce.Domain.Category>>(result);

            return Page();
        }
    }
}
