using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentContactController : StudentDetailController<StudentContact>
    {
        public StudentContactController(EntityBaseRepository<StudentContact> items) : base(items)
        {
        }
    }
}
