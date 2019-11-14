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
                    Id = 1,
                    Name = "Vegeterian soup",
                    Price = 12.55
                },
                new Product {
                    Id = 1,
                    Name = "Gawaii pizza",
                    Price = 12.55
                },
                new Product {
                    Id = 1,
                    Name = "Italian pasta",
                    Price = 12.55
                },
                new Product {
                    Id = 1,
                    Name = "Mexico burrito",
                    Price = 12.55
                },
                new Product {
                    Id = 1,
                    Name = "Ukrainian pie",
                    Price = 12.55
                },
                new Product {
                    Id = 1,
                    Name = "American coofee",
                    Price = 12.55
                },
                new Product {
                    Id = 1,
                    Name = "Japanese sushi",
                    Price = 12.55
                }
            };
            return products;
        }
    }
}