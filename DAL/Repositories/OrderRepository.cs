using DAL.Interfaces;
using DAL.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class OrderRepository : DapperRepository<Product>, IDapperRepository<Product>
    {
        public OrderRepository() : base("Product")
        {
        }

        //public IEnumerable<Product> GetProducts()
        //{
        //    using (var connection = CreateConnection())
        //    {
        //        return connection.Query<Product>($"SELECT * FROM Products");
        //    }
        //}

        public int CreateOrder(Cart cart)
        {
            //using (var connection = CreateConnection())
            //{
            //    var sqlStatement = "DELETE FROM Products WHERE Id = @Id";
            //    var affectedrows = connection.Execute(sqlStatement, new { Id = id });
            //    return affectedrows;
            //}
            return 1;
        }

    }
}
