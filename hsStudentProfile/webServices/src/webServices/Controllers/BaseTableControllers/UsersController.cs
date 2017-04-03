using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using System;
using webServices.Infrastructure.Auth;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : ReadWriteControllerBase<Users>
    {
        private IUserValidationService userval;

        public UsersController(EntityBaseRepository<Users> items, IUserValidationService _uv) : base(items)
        {
            userval = _uv;
        }

        //private readonly IEmailService _emailService;
        //public EmailController(IEmailService emailService)
        //{
        //    _emailService = emailService;
        //}

        [HttpPost]
        [AllowAnonymous]
        public IActionResult Index([FromBody] Users user)
        {
            if (user == null)
            {
                return BadRequest();
            }

            try
            {
                if (ModelState.IsValid)
                {
                    //create user here
                    if (userval.AddUser(user))
                        return StatusCode(StatusCodes.Status201Created);
                    //else
                    //What code should we return if we fail?
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
