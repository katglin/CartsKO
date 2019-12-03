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
using Cart = BLL.Models.Cart;

namespace BLL.Services
{
    public class OrderService : IDisposable
    {
        public OrderService()
        {
        }

        // history
        //public IEnumerable<Product> GetOrderList()
        //{
            //using (var productService = new ProductRepository())
            //{
            //    var config = new MapperConfiguration(cfg => cfg.CreateMap<DAL.Models.Product, Product>());
            //    var mapper = config.CreateMapper();
            //    return mapper.Map<IEnumerable<Product>>(productService.GetProducts());
            //}
       // }

        public int CreateOrder(Cart cart)
        {
            using (var orderRepo = new OrderRepository())
            {
                var config = new MapperConfiguration(cfg => cfg.CreateMap<Cart, DAL.Models.Cart>());
                var mapper = config.CreateMapper();
                return productService.CreateOrder(mapper.Map<DAL.Models.Cart>(cart));
            }
        }

        public void Dispose()
        {
        }
    }
}
