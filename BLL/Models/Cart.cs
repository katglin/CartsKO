using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Models
{
    public class Cart
    {
        public Product Products { get; set; }

        public int Amount { get; set; }
    }
}
