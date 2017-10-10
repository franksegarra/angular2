using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;
using System;
using Microsoft.AspNetCore.Http;
using System.Linq;
using webServices.Infrastructure.FileService;
using Microsoft.Extensions.Primitives;
using System.Threading.Tasks;
using System.Collections.Generic;

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
        public async Task<IActionResult> GetByProfileName(string profilename)
        {
            IEnumerable<StudentProfile> items = null;
            try
            {
                items = await _Items.FindByAsync(s => s.profilename == profilename);
                if (items == null)
                {
                    return NotFound();
                }

                return Ok(items.FirstOrDefault());
            }
            catch (Exception ex)
            {
                //logger.Error(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        //TODO: Post File Async
        [HttpPost("PostProfilePicture/{studentId:int}")]
        public async Task<IActionResult> PostProfilePicture(int studentId)
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

                if (await _picSvc.UpdateProfilePictureAsync(pic, stream, updtProfId) > 0)
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
