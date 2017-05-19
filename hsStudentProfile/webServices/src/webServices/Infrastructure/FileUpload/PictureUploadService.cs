using Microsoft.Extensions.Options;
using System;
using System.IO;
using webServices.Entities;
using webServices.Repositories;

namespace webServices.Infrastructure.FileUpload
{
    public class PictureUploadService : IPictureUploadService
    {
        EntityBaseRepository<StudentPictures> _pics;
        EntityBaseRepository<Student> _students;
        private readonly StorageConfig _storageConfig;

        public PictureUploadService(EntityBaseRepository<StudentPictures> pics, EntityBaseRepository<Student> students, IOptions<StorageConfig> storageConfig)
        {
            _pics = pics;
            _students = students;
            _storageConfig = storageConfig.Value;
        }

        public bool AddProfilePicture(StudentPictures pic, Stream stream)
        {
            string[] filename = pic.filename.Split('.');

            try
            {
                //Save picture row
                _pics.Add(pic);

                //Update filename
                string newfilename = filename[0] + pic.id + "." + filename[1];
                pic.filename = newfilename;
                _pics.Edit(pic);

                //Write file to storage -  C:\repos\hsStudentProfile\web\src\assets\pictures;
                using (Stream file = File.Create(_storageConfig.Pictures + newfilename))
                {
                    CopyStream(stream, file);
                }

                return true;
            }
            catch (Exception ex)
            {
                //Log error here
                return false;
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
