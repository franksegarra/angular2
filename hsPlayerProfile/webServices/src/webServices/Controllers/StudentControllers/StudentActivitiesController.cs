using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentActivitiesController : StudentDetailController<StudentActivities>
    {
        public StudentActivitiesController(EntityBaseRepository<StudentActivities> items) : base(items)
        {
        }
    }
}
