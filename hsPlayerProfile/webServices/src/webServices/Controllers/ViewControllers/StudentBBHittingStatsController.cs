using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentBBHittingStatsController : StudentDetailController<StudentBBHittingStats>
    {
        public StudentBBHittingStatsController(EntityBaseRepository<StudentBBHittingStats> items) : base(items)
        {
        }
    }
}
