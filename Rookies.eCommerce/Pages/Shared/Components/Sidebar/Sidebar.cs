using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Rookies.eCommerce.Pages.Shared.Components.Sidebar
{
    public class Sidebar : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var _http = new HttpClient();
            _http.BaseAddress = new Uri("https://localhost:7276");

            var res = await _http.GetAsync("api/Category");
            var result = res.Content.ReadAsStringAsync().Result;
            var item = JsonConvert.DeserializeObject<List<Rookies.eCommerce.Domain.Category>>(result);
            return View<List<Rookies.eCommerce.Domain.Category>>(item);
        }
    }
}
