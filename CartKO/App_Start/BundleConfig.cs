using System.Web;
using System.Web.Optimization;

namespace CartKO
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/knockout").Include(
                      "~/Scripts/knockout-3.5.1.js"));
            bundles.Add(new ScriptBundle("~/bundles/cart").Include(
                      "~/Scripts/Utils/DateHelper.js",
                      "~/Scripts/Utils/ApiService.js",
                      "~/Scripts/KnockoutModels/ProductModel.js",
                      "~/Scripts/KnockoutModels/CartModel.js",
                      "~/Scripts/KnockoutModels/OrderModel.js",
                      "~/Scripts/KnockoutModels/CustomerViewModel.js",
                      "~/Scripts/KnockoutModels/ManagerViewModel.js",
                      "~/Scripts/KnockoutModels/OrderViewModel.js",
                      "~/Scripts/KnockoutModels/CartInit.js"
                      ));
        }
    }
}
