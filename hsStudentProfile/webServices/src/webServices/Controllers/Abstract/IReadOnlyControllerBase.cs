using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using webServices.Entities;
using webServices.Repositories;

namespace webServices.Controllers
{
    public interface IReadOnlyControllerBase<T> 
        where T : class, IEntityBase, new()
    {
        EntityBaseRepository<T> _Items { get; set; }
        Task<IActionResult> Get();
        Task<IActionResult> GetById(int id);
    }
}