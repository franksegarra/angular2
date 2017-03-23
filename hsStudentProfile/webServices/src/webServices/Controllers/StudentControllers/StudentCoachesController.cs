using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;
using System;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Net.Http;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentCoachesController : StudentDetailController<StudentCoaches>
    {
        IConfiguration configuration;

        public StudentCoachesController(EntityBaseRepository<StudentCoaches> items, IConfiguration configuration) : base(items)
        {
            this.configuration = configuration;
        }

        //[HttpPost("ValidateReCaptcha")]
        //public async Task<IActionResult> ValidateReCaptcha([FromBody] string reCaptchaResponse)
        //{
        //    string recaptchaURL = "https://www.google.com/recaptcha/api/siteverify?secret=";
        //    string privatekey = "6LcyIBgUAAAAABfFkpeZWkpSvewY3OQBZMJ9KMWg";

        //    if (reCaptchaResponse == null)
        //    {
        //        return BadRequest();
        //    }

        //    try
        //    {
        //        string data = await new HttpClient().GetStringAsync(recaptchaURL + privatekey + "&response=" + reCaptchaResponse);
        //        JsonResponseObject jobj = JsonConvert.DeserializeObject<JsonResponseObject>(data);
        //        return Ok(jobj);
        //    }
        //    catch (Exception ex)
        //    {
        //        //logger.Error(ex.Message);
        //        return StatusCode(StatusCodes.Status500InternalServerError);
        //    }
        //}
    }
}
