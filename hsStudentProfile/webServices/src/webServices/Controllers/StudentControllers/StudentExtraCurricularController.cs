using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentExtraCurricularController : StudentDetailController<StudentExtraCurricular>
    {
        public StudentExtraCurricularController(EntityBaseRepository<StudentExtraCurricular> items) : base(items)
        {
        }
    }
}
