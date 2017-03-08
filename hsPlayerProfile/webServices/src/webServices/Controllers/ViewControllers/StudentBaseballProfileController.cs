﻿using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentBaseballProfileController : StudentViewController<StudentBaseballProfile>
    {
        public StudentBaseballProfileController(EntityBaseRepository<StudentBaseballProfile> items) : base(items)
        {
        }
    }
}
