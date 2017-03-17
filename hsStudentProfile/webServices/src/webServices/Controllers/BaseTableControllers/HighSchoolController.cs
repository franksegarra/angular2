using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class HighSchoolController : ReadWriteControllerBase<HighSchool>
    {
        public HighSchoolController(EntityBaseRepository<HighSchool> items) : base(items)
        {
        }
    }
}
