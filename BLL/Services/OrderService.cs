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
        public IEnumerable<Order> GetOrderList()
        {
            using (var orderRepo = new OrderRepository())
            {
                orderRepo.GetOrders();
            }
        }

        public int CreateOrder(IEnumerable<Cart> cart, string username)
        {
            using (var userRepo = new UserRepository())
            using (var orderRepo = new OrderRepository())
            {
                var userId = userRepo.FindUserByUsername(username);
                if (userId == 0)
                {
                    userId = userRepo.CreateUser(username);
                }

                var config = new MapperConfiguration(cfg => cfg.CreateMap<Cart, DAL.Models.Cart>());
                var mapper = config.CreateMapper();
                return orderRepo.CreateOrder(mapper.Map<IEnumerable<DAL.Models.Cart>>(cart), (int)userId);
            }
        }

        public void Dispose()
        {
        }
    }
}
