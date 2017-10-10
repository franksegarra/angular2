using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using webServices.Entities;

namespace webServices.Controllers
{
    public interface IStudentDetailController<T>
        where T : class, IStudentEntityBase, new()
    {
        Task<IActionResult> GetByStudentId(int studentid);
    }
}