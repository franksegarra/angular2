using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using webServices.Infrastructure.EmailService;
using webServices.Entities.Email;
using Microsoft.AspNetCore.Http;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace webServices.Controllers.Email
{
    [Route("api/[controller]")]
    public class EmailController : Controller
    {
        private readonly IEmailService _emailService;

        public EmailController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost()]
        public IActionResult Index([FromBody] EmailMessage emailmessage)
        {
            if (emailmessage == null)
            {
                return BadRequest();
            }

            try
            {
                if (ModelState.IsValid)
                {
                    _emailService.SendEmailAsync(emailmessage);
                    return StatusCode(StatusCodes.Status201Created);
                }
                return StatusCode(StatusCodes.Status400BadRequest);
            }
            catch (Exception ex)
            {
                //logger.Error(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
