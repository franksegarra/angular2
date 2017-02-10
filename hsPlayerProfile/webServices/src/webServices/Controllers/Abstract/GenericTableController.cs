using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using webServices.Repositories;
using webServices.Entities;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace webServices.Controllers
{
    //[Route("api/[controller]")]
    public class GenericTableController<T> : Controller, IGenericTableController<T>
            where T : class, IEntityBase, new()
    {
        public EntityBaseRepository<T> _Items { get; set; }

        public GenericTableController(EntityBaseRepository<T> items)
        {
            _Items = items;
        }

        // GET 
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<T> items = null;
            try
            {
                items = _Items.GetAll();
                if (items == null)
                {
                    return NotFound();
                }
                return Ok(items);
            }
            catch (Exception ex)
            {
                //logger.Error(ex.Message);
                return null;
            }
        }

        // GET {id}   
        [HttpGet("{id:int}")]
        public IActionResult GetById(int id)
        {
            T item = null;
            try
            {
                item = _Items.GetSingle(id);
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

        // POST 
        [HttpPost]
        public IActionResult Post([FromBody] T item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            try
            {
                if (ModelState.IsValid)
                {
                    _Items.Add(item);
                    return CreatedAtRoute("DefaultApi", new { controller = nameof(T), id = item.id }, item);
                }
                return StatusCode(StatusCodes.Status400BadRequest);
            }
            catch (Exception ex)
            {
                //logger.Error(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        // PUT {id}
        [HttpPut("{id:int}")]
        public IActionResult Put(int id, [FromBody] T updateditem)
        {
            try
            {
                //Must get something to update
                if (updateditem == null || updateditem.id != id)
                {
                    return BadRequest();
                }

                //Must be one of ours
                var item = _Items.GetSingle(id);
                if (item == null)
                {
                    return NotFound();
                }

                //Must be valid
                if (ModelState.IsValid)
                {
                    _Items.Edit(updateditem);
                    return CreatedAtRoute("DefaultApi", new { controller = nameof(T), id = updateditem.id }, updateditem);
                }

                return StatusCode(StatusCodes.Status400BadRequest);
            }
            catch (Exception ex)
            {
                //logger.Error(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        // DELETE {id}
        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var item = _Items.GetSingle(id);
                if (item == null)
                {
                    return NotFound();
                }

                _Items.Delete(item);
                return new NoContentResult();
            }
            catch (Exception ex)
            {
                //logger.Error(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
