using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;
using Microsoft.Extensions.Configuration;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentCoachesController : StudentDetailController<StudentCoaches>
    {
        IConfiguration configuration;

        public StudentCoachesController(EntityBaseRepository<StudentCoaches> items, IConfiguration configuration) : base(items)
        {
            this.configuration = configuration;
        }
    }
}
