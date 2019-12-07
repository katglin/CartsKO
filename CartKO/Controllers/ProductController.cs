using BLL.Services;
using BLL.Models;
using CartKO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Product = BLL.Models.Product;

namespace CartKO.Controllers
{
    public class ProductController : Controller
    {
        [HttpGet]
        public JsonResult Get(ProductSearchModel searchModel)
        {
            using (var productService = new ProductService())
            {
                var products = productService.GetProductList(searchModel);
                return Json(products, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public int Delete(int id)
        {
            using (var productService = new ProductService())
            {
                return productService.DeleteProduct(id);
            }
        }

        // Create or Edit
        [HttpPost]
        public int Save(Product product)
        {
            using (var productService = new ProductService())
            {
                return productService.UpdateProduct(product);
            }
        }

        [HttpPost]
        public JsonResult UploadImage()
        {
            for (int i = 0; i < Request.Files.Count; i++)
            {
                HttpPostedFileBase file = Request.Files[i];
                int fileSize = file.ContentLength;
                string fileName = file.FileName;
                string mimeType = file.ContentType;
                System.IO.Stream fileContent = file.InputStream;
                file.SaveAs(Server.MapPath("~/Images/") + fileName);
            }
            return Json("Uploaded 1 file");
        }
    }
}