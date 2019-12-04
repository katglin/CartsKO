using BLL.Models;
using BLL.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CartKO.Controllers
{
    public class OrderController : Controller
    {
        public ActionResult History()
        {
            return View();
        }

        public int Buy(IEnumerable<Cart> cart, string username)
        {
            using (var orderService = new OrderService())
            {
                return orderService.CreateOrder(cart, username);
            }
        }

        public void GetOrders()
        {
            using (var orderService = new OrderService())
            {
                orderService.GetOrderList();
            }
        }
    }
}
