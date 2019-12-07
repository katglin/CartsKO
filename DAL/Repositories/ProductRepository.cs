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
    public class ProductRepository : DapperRepository<Product>, IDapperRepository<Product>
    {
        public ProductRepository() : base("Product")
        {
        }

        public IEnumerable<Product> GetProducts(ProductSearchModel searchModel)
        {
            using (var connection = CreateConnection())
            {
                searchModel.SearchText = !string.IsNullOrWhiteSpace(searchModel.SearchText) ? searchModel.SearchText.ToLower() : "";
                searchModel.SearchText = searchModel.SearchText.ToLower();
                var sql = new StringBuilder($"SELECT * FROM Products WHERE LOWER(Name) LIKE '%{searchModel.SearchText}%'");
                if (searchModel.MinPrice != null && searchModel.MaxPrice != null)
                {
                    sql.Append($" AND Price BETWEEN {searchModel.MinPrice} AND {searchModel.MaxPrice}");
                }
                return connection.Query<Product>(sql.ToString());
            }
        }

        public int DeleteProduct(int id)
        {
            using (var connection = CreateConnection())
            {
                var sqlStatement = "DELETE FROM Products WHERE Id = @Id";
                var affectedrows = connection.Execute(sqlStatement, new { Id = id });
                return affectedrows;
            }
        }

        public int CreateProduct(Product product)
        {
            using (var connection = CreateConnection())
            {
                var sqlStatement = "INSERT INTO Products (Name, Price, Amount, ImagePath) VALUES (@Name, @Price, @Amount, @ImagePath)";
                var affectedrows = connection.Execute(sqlStatement,
                    new
                    {
                        Name = product.Name,
                        Price = product.Price,
                        Amount = product.Amount,
                        ImagePath = product.ImagePath
                    });
                return affectedrows;
            }
        }

        public int UpdateProduct(Product product)
        {
            using (var connection = CreateConnection())
            {
                var sqlStatement = "UPDATE Products SET Name=@Name, Price=@Price, Amount=@Amount, ImagePath=@ImagePath WHERE Id = @Id";
                var affectedrows = connection.Execute(sqlStatement,
                    new
                    {
                        Name = product.Name,
                        Price = product.Price,
                        Amount = product.Amount,
                        ImagePath = product.ImagePath,
                        Id = product.Id
                    });
                return affectedrows;
            }
        }
    }
}
