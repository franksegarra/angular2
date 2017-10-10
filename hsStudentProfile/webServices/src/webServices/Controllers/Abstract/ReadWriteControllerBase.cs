using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using webServices.Repositories;
using webServices.Entities;
using System.Threading.Tasks;
using System.Net.Http;
using Newtonsoft.Json;
using Microsoft.AspNetCore.JsonPatch;

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
        public virtual async Task<IActionResult> Post([FromBody] T item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            try
            {
                if (ModelState.IsValid)
                {
                    item.id = 0;
                    item.created = DateTime.Now;
                    await _Items.AddAsync(item);
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
        public async Task<IActionResult> Put(int id, [FromBody] T updateditem)
        {
            try
            {
                //Must get something to update
                if (updateditem == null || updateditem.id != id)
                {
                    return BadRequest();
                }

                //Must be one of ours
                var item = await _Items.GetSingleAsync(id);
                if (item == null)
                {
                    return NotFound();
                }

                //Must be valid
                if (ModelState.IsValid)
                {
                    await _Items.EditAsync(updateditem);
                    return StatusCode(StatusCodes.Status200OK, updateditem);
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
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var item = await _Items.GetSingleAsync(id);
                if (item == null)
                {
                    return NotFound();
                }

                await _Items.DeleteAsync(item);
                return new NoContentResult();
            }
            catch (Exception ex)
            {
                //logger.Error(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPatch("{id:int}")]
        public async Task<IActionResult> Patch(int id, [FromBody]JsonPatchDocument<T> updateditem)
        {
            try
            {
                //Must get something to update
                if (updateditem == null)
                {
                    return BadRequest();
                }

                //Must be one of ours
                var item = await _Items.GetSingleAsync(id);
                if (item == null)
                {
                    return NotFound();
                }

                updateditem.ApplyTo(item, ModelState);

                //Must be valid
                if (ModelState.IsValid)
                {
                    await _Items.EditAsync(item);
                    return StatusCode(StatusCodes.Status200OK, updateditem);
                }

                return StatusCode(StatusCodes.Status400BadRequest);
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
