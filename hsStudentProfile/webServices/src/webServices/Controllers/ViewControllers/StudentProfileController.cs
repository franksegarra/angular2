using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;
using System;
using Microsoft.AspNetCore.Http;
using System.Linq;
using webServices.Infrastructure.FileService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Primitives;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentProfileController : StudentViewController<StudentProfile>
    {
        IFileService _picSvc;
        EntityBaseRepository<Student> _student;

        public StudentProfileController(EntityBaseRepository<StudentProfile> items, IFileService picSvc, EntityBaseRepository<Student> student) : base(items)
        {
            _picSvc = picSvc;
            _student = student;
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

            try
            {
                var stream = this.Request.Form.Files[0].OpenReadStream();

                var name = this.Request.Form.Files[0].FileName;
                var filesize = this.Request.Form.Files[0].Length;
                string cat = Request.Form.TryGetValue("category", out StringValues categories) == true ? categories[0] : "";
                string ti = Request.Form.TryGetValue("title", out StringValues titles) == true ? titles[0] : "";
                string descr = Request.Form.TryGetValue("description", out StringValues descriptions) == true ? descriptions[0] : "";

                StudentPictures pic = new StudentPictures()
                {
                    id = 0,
                    studentid = studentId,
                    filename = name,
                    created = DateTime.Now,
                    filesize = filesize,
                    category = cat,
                    title = ti,
                    description = descr
                };

                IUpdateProfileId updtProfId = new UpdateStudentProfilePicId(_student);

                if (_picSvc.UpdateProfilePicture(pic, stream, updtProfId) > 0)
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
