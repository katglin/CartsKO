using DAL.Interfaces;
using DAL.Models;
using DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class ProductService
    {
        public IDapperRepository<Product> productsDB { get; set; }

        public ProductService()
        {
            productsDB = new ProductRepository();
        }
    }
}
