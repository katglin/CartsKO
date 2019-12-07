using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Models
{
    public class Order
    {
        public string Username { get; set; }
        public string ProductList { get; set; }
        public double TotalPrice { get; set; }
        public string Status { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
