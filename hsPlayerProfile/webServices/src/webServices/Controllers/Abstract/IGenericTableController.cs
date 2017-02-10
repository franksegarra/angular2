using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq.Expressions;
using webServices.Entities;
using webServices.Repositories;

namespace webServices.Controllers
{
    public interface IGenericTableController<T> where T : class, IEntityBase, new()
    {
        EntityBaseRepository<T> _Items { get; set; }
        IActionResult Get();
        IActionResult GetById(int id);
        IActionResult FindBy(Expression<Func<T, bool>> predicate);
        IActionResult Post([FromBody] T item);
        IActionResult Put(int id, [FromBody] T updateditem);
        IActionResult Delete(int id);
    }
}