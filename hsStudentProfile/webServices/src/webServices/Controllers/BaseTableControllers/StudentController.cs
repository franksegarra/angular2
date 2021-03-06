﻿using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class StudentController : ReadWriteControllerBase<Student>
    {
        public StudentController(EntityBaseRepository<Student> items) : base(items)
        {
        }
    }
}
