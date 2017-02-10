using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using webServices.Repositories;
using webServices.Entities;
using System.Linq.Expressions;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace webServices.Controllers
{
    //[Route("api/[controller]")]
    public class GenericViewController<T> : Controller, IGenericViewController<T>
            where T : class, IEntityBase, new()
    {
        public EntityBaseRepository<T> _Items { get; set; }

        public GenericViewController(EntityBaseRepository<T> items)
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
                return StatusCode(StatusCodes.Status500InternalServerError);
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

        // GET {id}   
        [HttpGet("{studentid:int}")]
        public IActionResult GetByStudentId(int studentid)
        {
            IEnumerable<T> items = null;
            try
            {
                //TODO:  Need to have student id here
                items = _Items.FindBy(s => s.id == studentid);
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
