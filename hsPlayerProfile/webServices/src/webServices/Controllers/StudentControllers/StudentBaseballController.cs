using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentBaseballController : StudentDetailController<StudentBaseball>
    {
        public StudentBaseballController(EntityBaseRepository<StudentBaseball> items) : base(items)
        {
        }
    }
}
