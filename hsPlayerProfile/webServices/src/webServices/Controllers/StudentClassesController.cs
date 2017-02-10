using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentClassesController : GenericTableController<StudentClasses>
    {
        public StudentClassesController(EntityBaseRepository<StudentClasses> items) : base(items)
        {
        }
    }
}
