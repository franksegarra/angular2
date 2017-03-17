using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq.Expressions;
using webServices.Entities;
using webServices.Repositories;

namespace webServices.Controllers
{
    public interface IReadWriteControllerBase<T>
        where T : class, IEntityBase, new()
    {
        IActionResult Post([FromBody] T item);
        IActionResult Put(int id, [FromBody] T updateditem);
        IActionResult Delete(int id);
    }
}