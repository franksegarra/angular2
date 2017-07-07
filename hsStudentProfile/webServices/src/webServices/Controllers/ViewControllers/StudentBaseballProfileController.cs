using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;
using webServices.Infrastructure.FileService;
using System;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentBaseballProfileController : StudentViewController<StudentBaseballProfile>
    {
        IFileService _picSvc;
        EntityBaseRepository<StudentBaseball> _student;

        public StudentBaseballProfileController(EntityBaseRepository<StudentBaseballProfile> items, IFileService picSvc, EntityBaseRepository<StudentBaseball> student) : base(items)
        {
            _picSvc = picSvc;
            _student = student;
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

                IUpdateProfileId updtProfId = new UpdateBBProfilePicId(_student);

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
