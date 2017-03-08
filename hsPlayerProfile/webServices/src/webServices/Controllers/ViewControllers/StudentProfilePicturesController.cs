using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentProfilePicturesController : StudentViewController<StudentProfilePictures>
    {
        public StudentProfilePicturesController(EntityBaseRepository<StudentProfilePictures> items) : base(items)
        {
        }
    }
}
