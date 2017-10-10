using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using System;
using System.IO;
using System.Threading.Tasks;
using webServices.Entities;
using webServices.Repositories;

namespace webServices.Infrastructure.FileService
{
    public class FileService : IFileService
    {
        private readonly IHostingEnvironment _hostingEnvironment;
        EntityBaseRepository<StudentPictures> _pics;
        EntityBaseRepository<StudentVideos> _videos;
        //EntityBaseRepository<Student> _students;
        private readonly StorageConfig _storageConfig;

        public FileService(IHostingEnvironment hostingEnvironment, EntityBaseRepository<StudentPictures> pics, EntityBaseRepository<StudentVideos> videos, IOptions<StorageConfig> storageConfig)
        {
            _hostingEnvironment = hostingEnvironment;
            _pics = pics;
            _videos = videos;
            //_students = students;
            _storageConfig = storageConfig.Value;
        }

        public async Task<int> UpdateProfilePictureAsync(StudentPictures pic, Stream stream, IUpdateProfileId updtProfId)
        {
            try
            {
                int picid = await AddPictureAsync(pic, stream);

                if (picid > 0)
                {
                    updtProfId.UpdateID(pic.studentid, picid);
                    return picid;
                }
                else
                {
                    return 0;
                }
            }
            catch (Exception ex)
            {
                //Log error here
                return 0;
            }
        }

        public async Task<int> AddPictureAsync(StudentPictures pic, Stream stream)
        {
            string[] filename = pic.filename.Split('.');

            try
            {
                //Save picture row
                await _pics.AddAsync(pic);

                //Update filename
                string newfilename = filename[0] + pic.id + "." + filename[1];
                pic.filename = newfilename;
                await _pics.EditAsync(pic);

                string webRootPath = _hostingEnvironment.WebRootPath;

                //Write file to storage -  C:\repos\hsStudentProfile\web\src\ + assets\pictures\;
                using (Stream file = File.Create(webRootPath + _storageConfig.Pictures + newfilename))
                {
                    CopyStream(stream, file);
                }

                return pic.id;
            }
            catch (Exception ex)
            {
                //Log error here
                return 0;
            }
        }

        public int DeletePicture(int id)
        {
            try
            {
                var pic = _pics.GetSingle(id);
                if (pic == null)
                {
                    return StatusCodes.Status400BadRequest;
                }

                //Delete file
                string file2delete = _hostingEnvironment.WebRootPath + _storageConfig.Pictures + pic.filename;
                File.Delete(file2delete);
                
                //Delete row from database
                _pics.Delete(pic);
                return StatusCodes.Status204NoContent;
            }
            catch (Exception ex)
            {
                //logger.Error(ex.Message);
                return StatusCodes.Status500InternalServerError;
            }
        }

        public async Task<int> AddVideoAsync(StudentVideos video, Stream stream)
        {
            string[] filename = video.filename.Split('.');

            try
            {
                //Save picture row
                await _videos.AddAsync(video);

                //Update filename
                string newfilename = filename[0] + video.id + "." + filename[1];
                video.filename = newfilename;
                _videos.Edit(video);

                //Write file to storage -  C:\repos\hsStudentProfile\web\src\assets\pictures;
                using (Stream file = File.Create(_storageConfig.Videos + newfilename))
                {
                    CopyStream(stream, file);
                }

                return video.id;
            }
            catch (Exception ex)
            {
                //Log error here
                return 0;
            }
        }

        public int DeleteVideo(int id)
        {
            try
            {
                var video = _videos.GetSingle(id);
                if (video == null)
                {
                    return StatusCodes.Status400BadRequest;
                }

                //Delete file
                string file2delete = _hostingEnvironment.WebRootPath + _storageConfig.Videos + video.filename;
                File.Delete(file2delete);

                //Delete row from database
                _videos.Delete(video);
                return StatusCodes.Status204NoContent;
            }
            catch (Exception ex)
            {
                //logger.Error(ex.Message);
                return StatusCodes.Status500InternalServerError;
            }
        }

        public static void CopyStream(Stream input, Stream output)
        {
            byte[] buffer = new byte[8 * 1024];
            int len;
            while ((len = input.Read(buffer, 0, buffer.Length)) > 0)
            {
                output.Write(buffer, 0, len);
            }
        }
    }
}
