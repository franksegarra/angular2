﻿using Microsoft.AspNetCore.Mvc;
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
    public class StudentContactController : StudentDetailController<StudentContact>
    {
        IConfiguration configuration;

        public StudentContactController(EntityBaseRepository<StudentContact> items, IConfiguration configuration) : base(items)
        {
            this.configuration = configuration;
        }
    }
}
