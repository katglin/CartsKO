using CartKO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace CartKO.Controllers
{
    public class ProductController : ApiController
    {
        // api/product
        public IEnumerable<Product> Get()
        {
            var products = new[]
            {
                new Product {
                    Id = 1,
                    Name = "Scotish beer",
                    Price = 12.55
                },
                new Product {
                    Id = 2,
                    Name = "Vegeterian soup",
                    Price = 9.99
                },
                new Product {
                    Id = 3,
                    Name = "Gawaii pizza",
                    Price = 10.49
                },
                new Product {
                    Id = 4,
                    Name = "Italian pasta",
                    Price = 22.45
                },
                new Product {
                    Id = 5,
                    Name = "Mexico burrito",
                    Price = 19.55
                },
                new Product {
                    Id = 6,
                    Name = "Frensh pie",
                    Price = 10.15
                },
                new Product {
                    Id = 7,
                    Name = "American coffee",
                    Price = 24.99
                },
                new Product {
                    Id = 8,
                    Name = "Japanese sushi",
                    Price = 15.25
                }
            };
            return products;
        }
    }
}