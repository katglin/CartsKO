using AutoMapper;
using BLL.Models;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProductSearchModel = BLL.Models.ProductSearchModel;

namespace BLL.Services
{
    public static class Mapper
    {
        public static IMapper GetMapper()
        {
            var configuration = new MapperConfiguration(cfg => {
                cfg.CreateMap<ProductSearchModel, DAL.Models.ProductSearchModel>();
                cfg.CreateMap<DAL.Models.ProductSearchModel, ProductSearchModel>();
            });
            return configuration.CreateMapper();
        }
    }
}
