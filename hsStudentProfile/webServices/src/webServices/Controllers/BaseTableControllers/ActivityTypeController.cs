using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class ActivityTypeController : ReadWriteControllerBase<ActivityType>
    {
        public ActivityTypeController(EntityBaseRepository<ActivityType> items) : base(items)
        {
        }
    }
}
