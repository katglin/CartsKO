using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BLL.Models
{
    public class ProductSearchModel
    {
        public string SearchText { get; set; }
        public float? MinPrice { get; set; }
        public float? MaxPrice { get; set; }
    }
}