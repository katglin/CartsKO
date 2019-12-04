using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
    public class Order
    {
        public int Id { get; set; }
        
        public string Username { get; set; }
        public string ProductName { get; set; }
        public int Amount { get; set; }
        public DateTime CreatedDate { get; set; }

        //public virtual User User { get; set; }
        //public virtual Product Product { get; set; }
    }
}
