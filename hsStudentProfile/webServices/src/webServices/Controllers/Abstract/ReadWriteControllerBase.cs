using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using webServices.Repositories;
using webServices.Entities;
using webServices.Controllers;
using System.Threading.Tasks;
using System.Net.Http;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace webServices.Controllers
{
    //[Route("api/[controller]")]
    public class ReadWriteControllerBase<T> : ReadOnlyControllerBase<T>, IReadWriteControllerBase<T>
            where T : class, IEntityBase, new()
    {
        public ReadWriteControllerBase(EntityBaseRepository<T> items) : base(items)
        {
        }

        [HttpPost]
        public virtual IActionResult Post([FromBody] T item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            try
            {
                if (ModelState.IsValid)
                {
                    item.id = null;
                    item.created = DateTime.Now;
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

        [HttpPost("ValidateReCaptcha")]
        public async Task<IActionResult> ValidateReCaptcha([FromBody] string reCaptchaResponse)
        {
            string recaptchaURL = "https://www.google.com/recaptcha/api/siteverify?secret=";
            string privatekey = "6LcyIBgUAAAAABfFkpeZWkpSvewY3OQBZMJ9KMWg";

            if (reCaptchaResponse == null)
            {
                return BadRequest();
            }

            try
            {
                string data = await new HttpClient().GetStringAsync(recaptchaURL + privatekey + "&response=" + reCaptchaResponse);
                JsonResponseObject jobj = JsonConvert.DeserializeObject<JsonResponseObject>(data);
                return Ok(jobj);
            }
            catch (Exception ex)
            {
                //logger.Error(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

    }

    public class JsonResponseObject
    {
        public bool success { get; set; }
        [JsonProperty("error-codes")]
        public List<string> errorcodes { get; set; }
    }
}
