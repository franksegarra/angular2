using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;
using System;
using Microsoft.AspNetCore.Http;
using System.Linq;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentProfileController : StudentViewController<StudentProfile>
    {
        public StudentProfileController(EntityBaseRepository<StudentProfile> items) : base(items)
        {
        }

        [HttpGet("{profilename}")]
        public IActionResult GetByProfileName(string profilename)
        {
            StudentProfile item = null;
            try
            {
                item = _Items.FindBy(s => s.profilename == profilename).FirstOrDefault();
                if (item == null)
                {
                    return NotFound();
                }

                return Ok(item);
            }
            catch (Exception ex)
            {
                //logger.Error(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

    }
}
