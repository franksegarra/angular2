using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentLinksController : StudentDetailController<StudentLinks>
    {
        public StudentLinksController(EntityBaseRepository<StudentLinks> items) : base(items)
        {
        }
    }
}
