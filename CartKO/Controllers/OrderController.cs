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

        [HttpPost]
        public int Buy(IEnumerable<Cart> cart, string username)
        {
            using (var orderService = new OrderService())
            {
                return orderService.CreateOrder(cart, username);
            }
        }

        [HttpGet]
        public JsonResult GetOrders()
        {
            using (var orderService = new OrderService())
            {
                var result = orderService.GetOrderList();
                return Json(result, JsonRequestBehavior.AllowGet);
            }
        }
    }
}
