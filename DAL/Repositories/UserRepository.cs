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
    public class UserRepository : DapperRepository<User>, IDapperRepository<User>
    {
        public UserRepository() : base("User")
        {
        }

        public int? FindUserByUsername(string username)
        {
            using (var connection = CreateConnection())
            {
                var sqlStatement = "SELECT Id FROM Users WHERE Username = @username";
                var id = connection.Query<int>(sqlStatement, new { username });
                return id.FirstOrDefault();
            }
        }

        public int CreateUser(string username)
        {
            using (var connection = CreateConnection())
            {
                var sqlStatement = "INSERT INTO Users (Username) VALUES (@username); SELECT CAST(SCOPE_IDENTITY() as int)";
                var id = connection.Query<int>(sqlStatement, new { username });
                return id.FirstOrDefault();
            }
        }

    }
}
