using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class ActivityTypeController : GenericTableController<ActivityType>
    {
        public ActivityTypeController(EntityBaseRepository<ActivityType> items) : base(items)
        {
        }
    }
}
