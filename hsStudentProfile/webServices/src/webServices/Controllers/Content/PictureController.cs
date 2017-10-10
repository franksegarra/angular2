using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Hosting;
using System.Threading.Tasks;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class PictureController : Controller
    {
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly StorageConfig _storageConfig;
        public EntityBaseRepository<StudentPictures> _Items { get; set; }
        
        public PictureController(EntityBaseRepository<StudentPictures> items, IHostingEnvironment hostingEnvironment, IOptions<StorageConfig> storageConfig) 
        {
            _Items = items;
            _hostingEnvironment = hostingEnvironment;
            _storageConfig = storageConfig.Value;
        }

        // GET {id}   
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            if (id == 0) { return NotFound(); }

            //find picture
            var item = await _Items.GetSingleAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            //TODO: Read File Async
            string webRootPath = _hostingEnvironment.WebRootPath;
            string filename = webRootPath + _storageConfig.Pictures + item.filename;
            using(var image = System.IO.File.OpenRead(filename))
            {
                return File(image, "image/jpeg");
            }
        }
    }
}
