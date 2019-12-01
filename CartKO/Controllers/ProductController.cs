using CartKO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Mvc;

namespace CartKO.Controllers
{
    public class ProductController : Controller
    {
        [HttpGet]
        public JsonResult Get()
        {
            var products = new[]
            {
                new Product {
                    Id = 1,
                    Name = "Scotish beer",
                    Price = 12.55,
                    ImagePath = "/Images/1.jpeg",
                    Amount = 3
                },
                new Product {
                    Id = 2,
                    Name = "Vegeterian soup",
                    Price = 9.99,
                    ImagePath = "/Images/2.jpeg",
                    Amount = 3
                },
                new Product {
                    Id = 3,
                    Name = "Gawaii pizza",
                    Price = 10.49,
                    ImagePath = "/Images/3.jpeg",
                    Amount = 3
                },
                new Product {
                    Id = 4,
                    Name = "Italian pasta",
                    Price = 22.45,
                    ImagePath = "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/what-is-kosher-1296x728-feature.jpg",
                    Amount = 3
                },
                new Product {
                    Id = 5,
                    Name = "Mexico burrito",
                    Price = 19.55,
                    ImagePath = "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/what-is-kosher-1296x728-feature.jpg",
                    Amount = 3
                },
                new Product {
                    Id = 6,
                    Name = "Frensh pie",
                    Price = 10.15,
                    ImagePath = "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/what-is-kosher-1296x728-feature.jpg",
                    Amount = 3
                },
                new Product {
                    Id = 7,
                    Name = "American coffee",
                    Price = 24.99,
                    ImagePath = "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/what-is-kosher-1296x728-feature.jpg",
                    Amount = 3
                },
                new Product {
                    Id = 8,
                    Name = "Japanese sushi",
                    Price = 15.25,
                    Amount = 0
                }
            };
            return Json(products, JsonRequestBehavior.AllowGet); ;
        }

        [HttpPost]
        public bool Delete(int id)
        {
            return true;
        }

        // Create or Edit
        [HttpPost]
        public bool Save(Product product)
        {
            return true;
        }
    }
}