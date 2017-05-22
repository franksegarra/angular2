using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;
using System;
using Microsoft.AspNetCore.Http;
using System.Linq;
using webServices.Infrastructure.FileUpload;
using Microsoft.AspNetCore.Authorization;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentProfileController : StudentViewController<StudentProfile>
    {
        IFileUploadService _picSvc;

        public StudentProfileController(EntityBaseRepository<StudentProfile> items, IFileUploadService picSvc) : base(items)
        {
            _picSvc = picSvc;
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
        [AllowAnonymous]
        public IActionResult PostProfilePicture(int studentId)
        {
            if (this.Request.Form.Files[0] == null)
            {
                return BadRequest();
            }

            try
            {

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

                if (_picSvc.UpdateStudentProfilePicture(pic, stream) > 0)
                {
                    return StatusCode(StatusCodes.Status201Created);
                }
                else
                {
                    return StatusCode(StatusCodes.Status400BadRequest);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

        }
    }
}
