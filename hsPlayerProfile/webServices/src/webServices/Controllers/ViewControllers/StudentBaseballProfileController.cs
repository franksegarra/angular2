using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentBaseballProfileController : StudentDetailController<StudentBaseballProfile>
    {
        public StudentBaseballProfileController(EntityBaseRepository<StudentBaseballProfile> items) : base(items)
        {
        }
    }
}
