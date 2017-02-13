using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using webServices.Repositories;
using webServices.Entities;
using webServices.Controllers;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace webServices.Controllers
{
    //[Route("api/[controller]")]
    public class StudentDetailController<T> : ReadOnlyControllerBase<T>, IStudentDetailController<T>
            where T : class, IEntityBase, IStudentEntityBase, new()
    {
        public StudentDetailController(EntityBaseRepository<T> items) : base(items)
        {
        }

        // Get classes for a student
        [HttpGet("getbystudentid/{studentid:int}")]
        public IActionResult GetByStudentId(int studentid)
        {
            IEnumerable<T> items = null;
            try
            {
                items = _Items.FindBy(s => s.studentid == studentid);
                if (items == null)
                {
                    return NotFound();
                }
                return Ok(items);
            }
            catch (Exception ex)
            {
                //logger.Error(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

    }
}
