using Microsoft.AspNetCore.Mvc;
using webServices.Entities;
using webServices.Repositories;

namespace webServices.Controllers
{
    public interface IReadOnlyControllerBase<T> 
        where T : class, IEntityBase, new()
    {
        EntityBaseRepository<T> _Items { get; set; }
        IActionResult Get();
        IActionResult GetById(int id);
    }
}