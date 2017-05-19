using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;
using System;
using Microsoft.AspNetCore.Http;
using System.Linq;
using webServices.Infrastructure.FileUpload;

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

        [HttpPost("PostProfilePicture/{studentId:int}")]
        public IActionResult PostProfilePicture(int studentId)
        {
            if (this.Request.Form.Files[0] == null)
            {
                return BadRequest();
            }

            var stream = this.Request.Form.Files[0].OpenReadStream();
            var name = this.Request.Form.Files[0].FileName;
            var filesize = this.Request.Form.Files[0].Length;

            StudentPictures pic = new StudentPictures()
            {
                id = 0,
                studentid = studentId,
                category = "Profile Picture",
                title = name,
                filename = name,
                description = name,
                created = DateTime.Now,
                filesize = filesize
            };

            //IPictureUploadService _picSvc = 














            return null; //null just to make error free
        }


    }
}
