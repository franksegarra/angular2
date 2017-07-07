using Microsoft.AspNetCore.Mvc;
using webServices.Repositories;
using webServices.Entities;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Authorization;

namespace webServices.Controllers
{
    [Route("api/[controller]")]
    public class VideoController : Controller
    {
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly StorageConfig _storageConfig;
        public EntityBaseRepository<StudentVideos> _Items { get; set; }
        
        public VideoController(EntityBaseRepository<StudentVideos> items, IHostingEnvironment hostingEnvironment, IOptions<StorageConfig> storageConfig) 
        {
            _Items = items;
            _hostingEnvironment = hostingEnvironment;
            _storageConfig = storageConfig.Value;
        }

        // GET {id}   
        [HttpGet("{id:int}")]
        [AllowAnonymous]
        public IActionResult GetById(int id)
        {
            if (id == 0) { return NotFound(); }

            //find video
            var item = _Items.GetSingle(id);
            if (item == null)
            {
                return NotFound();
            }

            string webRootPath = _hostingEnvironment.WebRootPath;
            string filename = webRootPath + _storageConfig.Videos + item.filename;
            var video = System.IO.File.OpenRead(filename);
            return File(video, "video/mp4");
        }
    }
}
