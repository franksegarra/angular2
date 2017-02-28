using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentPicturesController : StudentDetailController<StudentPictures>
    {
        public StudentPicturesController(EntityBaseRepository<StudentPictures> items) : base(items)
        {
        }
    }
}
