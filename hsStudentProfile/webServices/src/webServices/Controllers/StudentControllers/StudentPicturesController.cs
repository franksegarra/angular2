using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;
using webServices.Infrastructure.FileService;
using Microsoft.AspNetCore.Http;
using System;

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

    }
}
