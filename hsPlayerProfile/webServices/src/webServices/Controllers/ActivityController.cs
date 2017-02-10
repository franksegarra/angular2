using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class ActivityController : GenericTableController<Activity>
    {
        public ActivityController(EntityBaseRepository<Activity> items) : base(items)
        {
        }
    }
}
