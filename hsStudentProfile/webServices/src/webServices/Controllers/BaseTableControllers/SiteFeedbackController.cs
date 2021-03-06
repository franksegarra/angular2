﻿using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class SiteFeedbackController : ReadWriteControllerBase<SiteFeedback>
    {
        public SiteFeedbackController(EntityBaseRepository<SiteFeedback> items) : base(items)
        {
        }
    }
}
