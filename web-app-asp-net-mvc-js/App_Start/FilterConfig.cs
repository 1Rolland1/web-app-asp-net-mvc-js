using System.Web;
using System.Web.Mvc;

namespace web_app_asp_net_mvc_js
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
