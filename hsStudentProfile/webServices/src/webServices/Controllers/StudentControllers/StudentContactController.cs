using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;
using Microsoft.Extensions.Configuration;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentContactController : StudentDetailController<StudentContact>
    {
        IConfiguration configuration;

        public StudentContactController(EntityBaseRepository<StudentContact> items, IConfiguration configuration) : base(items)
        {
            this.configuration = configuration;
        }
    }
}
