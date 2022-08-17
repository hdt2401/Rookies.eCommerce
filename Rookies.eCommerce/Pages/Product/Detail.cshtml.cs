using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;
using Rookies.eCommerce.Domain;
using System.Text;
using System.Linq;
using System.Net.Http.Headers;

namespace Rookies.eCommerce.Pages.Product
{
    public class DetailModel : PageModel
    {
        private readonly HttpClient _http;
        private readonly ILogger<DetailModel> _logger;
        public Rookies.eCommerce.Domain.Product product { get; set; }
        public List<Rookies.eCommerce.Domain.Feedback> feedbacks = new List<Rookies.eCommerce.Domain.Feedback>();
        [BindProperty]
        public Feedback feedback { get; set; }

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

            

            //var image = await _http.GetAsync($"api/Product/{id}/image");
            //product.Image = image.Content.ReadAsStringAsync().Result;            

            var resFeedback = await _http.GetAsync($"api/Feedback/GetFeedback/{id}");
            var resultFeedback = resFeedback.Content.ReadAsStringAsync().Result;
            feedbacks = JsonConvert.DeserializeObject<List<Feedback>>(resultFeedback);
            feedbacks.Reverse();

            return Page();
        }
        public async Task<ActionResult> OnPost(int id)
        {

            var _http = new HttpClient();
            _http.BaseAddress = new Uri("https://localhost:7276");

            var content = new Feedback()
            {
                ProductId = id,
                Comment = feedback.Comment,
                Rating = feedback.Rating,
                CreatedDate = DateTime.Now
            };

            var response = await _http.PostAsJsonAsync("api/Feedback/", content);


            var res = await _http.GetAsync($"api/Product/{id}");
            var result = res.Content.ReadAsStringAsync().Result;
            product = JsonConvert.DeserializeObject<Rookies.eCommerce.Domain.Product>(result);

            var resFeedback = await _http.GetAsync($"api/Feedback/GetFeedback/{id}");
            var resultFeedback = resFeedback.Content.ReadAsStringAsync().Result;
            feedbacks = JsonConvert.DeserializeObject<List<Feedback>>(resultFeedback);
            feedbacks.Reverse();

            return Page();
}
    }
}
