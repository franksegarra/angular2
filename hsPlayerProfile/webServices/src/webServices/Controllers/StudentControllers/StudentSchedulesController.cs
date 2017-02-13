using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentSchedulesController : StudentDetailController<StudentSchedules>
    {
        public StudentSchedulesController(EntityBaseRepository<StudentSchedules> items) : base(items)
        {
        }
    }
}
