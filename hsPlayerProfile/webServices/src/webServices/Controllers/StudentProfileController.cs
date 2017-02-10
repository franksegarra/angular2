﻿using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentProfileController : GenericViewController<StudentProfile>
    {
        public StudentProfileController(EntityBaseRepository<StudentProfile> items) : base(items)
        {
        }
    }
}
