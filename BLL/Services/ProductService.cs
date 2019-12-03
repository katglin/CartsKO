using DAL.Interfaces;
using DAL.Models;
using BLL.Models;
using DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Product = BLL.Models.Product;
using AutoMapper;

namespace BLL.Services
{
    public class ProductService : IDisposable
    {
       // public IDapperRepository<Product> productsDB { get; set; }

        public ProductService()
        {
        }

        public IEnumerable<Product> GetProductList()
        {
            using (var productRepo = new ProductRepository())
            {
                var config = new MapperConfiguration(cfg => cfg.CreateMap<DAL.Models.Product, Product>());
                var mapper = config.CreateMapper();
                return mapper.Map<IEnumerable<Product>>(productRepo.GetProducts());
            }
        }

        public int UpdateProduct(Product product)
        {
            using (var productRepo = new ProductRepository())
            {
                var config = new MapperConfiguration(cfg => cfg.CreateMap<Product, DAL.Models.Product>());
                var mapper = config.CreateMapper();
                if (product.Id > 0)
                {
                    return productRepo.UpdateProduct(mapper.Map<DAL.Models.Product>(product));
                }
                else
                {
                    return productRepo.CreateProduct(mapper.Map<DAL.Models.Product>(product));
                }
            }
        }

        public int DeleteProduct(int id)
        {
            using (var productRepo = new ProductRepository())
            {
                return productRepo.DeleteProduct(id);
            }
        }

        public void Dispose()
        {
        }
    }
}
