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

        public bool Buy(Object cart, string username)
        {
            return true;
        }
    }
}
