using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using webServices.Repositories;
using webServices.Entities;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace webServices.Controllers
{
    //[Route("api/[controller]")]
    //[Authorize(Policy = "student")]
    public class StudentDetailController<T> : ReadWriteControllerBase<T>, IStudentDetailController<T>
            where T : class, IEntityBase, IStudentEntityBase, new()
    {
        public StudentDetailController(EntityBaseRepository<T> items) : base(items)
        {
        }

        // Get classes for a student
        [HttpGet("getbystudentid/{studentid:int}")]
        public async Task<IActionResult> GetByStudentId(int studentid)
        {
            IEnumerable<T> items = null;
            try
            {
                items = await _Items.FindByAsync(s => s.studentid == studentid);
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
