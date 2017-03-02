using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentSchedWithActivityController : StudentDetailController<StudentSchedWithActivity>
    {
        public StudentSchedWithActivityController(EntityBaseRepository<StudentSchedWithActivity> items) : base(items)
        {
        }
    }
}
