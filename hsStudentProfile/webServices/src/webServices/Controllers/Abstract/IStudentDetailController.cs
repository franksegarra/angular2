using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq.Expressions;
using webServices.Entities;

namespace webServices.Controllers
{
    public interface IStudentDetailController<T>
        where T : class, IStudentEntityBase, new()
    {
        IActionResult GetByStudentId(int studentid);
    }
}