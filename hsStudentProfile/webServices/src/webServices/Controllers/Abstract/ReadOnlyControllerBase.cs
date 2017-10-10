using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using webServices.Repositories;
using webServices.Entities;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace webServices.Controllers
{
    //[Route("api/[controller]")]
    //[Authorize(Policy = "student")]
    public class ReadOnlyControllerBase<T> : Controller, IReadOnlyControllerBase<T>
            where T : class, IEntityBase, new()
    {
        public EntityBaseRepository<T> _Items { get; set; }

        public ReadOnlyControllerBase(EntityBaseRepository<T> items)
        {
            _Items = items;
        }

        // GET 
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            IEnumerable<T> items = null;
            try
            {
                items = await _Items.GetAllAsync();
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

        // GET {id}   
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            T item = null;
            try
            {
                item = await _Items.GetSingleAsync(id);
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
