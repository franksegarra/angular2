using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Hosting;

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
        public IActionResult GetById(int id)
        {
            if (id == 0) { return NotFound(); }

            //find picture
            var item = _Items.GetSingle(id);
            if (item == null)
            {
                return NotFound();
            }

            string webRootPath = _hostingEnvironment.WebRootPath;
            string filename = webRootPath + _storageConfig.Pictures + item.filename;
            var image = System.IO.File.OpenRead(filename);
            return File(image, "image/jpeg");
        }
    }
}
