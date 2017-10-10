using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using webServices.Entities;

namespace webServices.Controllers
{
    public interface IReadWriteControllerBase<T>
        where T : class, IEntityBase, new()
    {
        Task<IActionResult> Post([FromBody] T item);
        Task<IActionResult> Put(int id, [FromBody] T updateditem);
        Task<IActionResult> Delete(int id);
        Task<IActionResult> Patch(int id, [FromBody]JsonPatchDocument<T> patch);
    }
}