using DAL.Interfaces;
using DAL.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class OrderRepository : DapperRepository<Cart>, IDapperRepository<Cart>
    {
        public OrderRepository() : base("Cart")
        {
        }

        public IEnumerable<Order> GetOrders()
        {
            using (var connection = CreateConnection())
            {
                //var query = "SELECT o.Id, u.Username, o.CreatedDate, p.Name, o.Amount, p.Id, u.Id FROM Orders o INNER JOIN Products p ON o.ProductId = p.Id INNER JOIN Users u On o.UserId = u.Id";
                //var result = connection.Query<Order, Product, User, Order>(query, map: (o, p, u) => {
                //    o.User = u;
                //    o.Product = p;
                //    return o;
                //},
                //splitOn: "Id, Id");

                var result = connection.Query<Order>("spGetOrderHistory", null, commandType: CommandType.StoredProcedure);
                return result;
            }
        }

        public int CreateOrder(IEnumerable<Cart> cart, int userId)
        {
            using (var connection = CreateConnection())
            {
                var orderDate = DateTime.UtcNow;
                var affectedrows = 0;
                var sqlStatement = "INSERT INTO Orders (ProductId, Amount, UserId, CreatedDate) VALUES (@product, @amount, @user, @date)";
                foreach (var item in cart)
                {
                    affectedrows += connection.Execute(sqlStatement, new { product = item.ProductId, amount = item.Amount, user = userId, date = orderDate });
                }
                return affectedrows;
            }
        }

    }
}
