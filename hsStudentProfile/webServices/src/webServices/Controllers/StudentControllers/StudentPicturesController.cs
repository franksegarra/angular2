using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;
using webServices.Infrastructure.FileService;
using Microsoft.AspNetCore.Http;
using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Primitives;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentPicturesController : StudentDetailController<StudentPictures>
    {
        IFileService _picSvc;

        public StudentPicturesController(EntityBaseRepository<StudentPictures> items, IFileService picSvc) : base(items)
        {
            _picSvc = picSvc;
        }

        [HttpDelete("DeletePicture/{id:int}")]
        public IActionResult DeletePicture(int id)
        {
            try
            {
                return StatusCode(_picSvc.DeletePicture(id));
            }
            catch (Exception ex)
            {
                //logger.Error(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }


        [HttpPost("PostPicture/{studentId:int}")]
        public IActionResult PostPicture(int studentId)
        {
            if (Request.Form.Files[0] == null)
            {
                return BadRequest();
            }

            try
            {
                var stream = Request.Form.Files[0].OpenReadStream();
                var name = Request.Form.Files[0].FileName;
                var filesize = Request.Form.Files[0].Length;
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

                if (_picSvc.AddPicture(pic, stream ) > 0)
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
