
using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StatesController : ReadWriteControllerBase<States>
    {
        public StatesController(EntityBaseRepository<States> items) : base(items)
        {
        }
    }
}
