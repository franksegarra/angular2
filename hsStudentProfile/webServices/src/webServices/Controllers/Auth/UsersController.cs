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

        [HttpPost]
        [AllowAnonymous]
        public override IActionResult Post([FromBody] Users user)
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
                    {
                        //Send Activation Email

                        return StatusCode(StatusCodes.Status201Created);
                    }

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
