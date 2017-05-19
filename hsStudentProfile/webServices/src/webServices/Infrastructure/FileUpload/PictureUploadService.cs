using Microsoft.Extensions.Options;
using System;
using System.IO;
using System.Linq;
using webServices.Entities;
using webServices.Repositories;

namespace webServices.Infrastructure.FileUpload
{
    public class FileUploadService : IFileUploadService
    {
        EntityBaseRepository<StudentPictures> _pics;
        EntityBaseRepository<StudentVideos> _vids;
        EntityBaseRepository<Student> _students;
        private readonly StorageConfig _storageConfig;

        public FileUploadService(EntityBaseRepository<StudentPictures> pics, EntityBaseRepository<StudentVideos> vids, EntityBaseRepository<Student> students, IOptions<StorageConfig> storageConfig)
        {
            _pics = pics;
            _vids = vids;
            _students = students;
            _storageConfig = storageConfig.Value;
        }

        public int UpdateStudentProfilePicture(StudentPictures pic, Stream stream)
        {
            try
            {
                int picid = AddPicture(pic, stream);

                if (picid > 0)
                {
                    var student = _students.FindBy(s => s.id == pic.studentid).FirstOrDefault();
                    if (student == null)
                        return 0;

                    student.profilepictureid = picid;
                    _students.Edit(student);
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

        public int AddPicture(StudentPictures pic, Stream stream)
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

                return pic.id;
            }
            catch (Exception ex)
            {
                //Log error here
                return 0;
            }
        }

        public int AddVideo(StudentVideos vid, Stream stream)
        {
            string[] filename = vid.filename.Split('.');

            try
            {
                //Save picture row
                _vids.Add(vid);

                //Update filename
                string newfilename = filename[0] + vid.id + "." + filename[1];
                vid.filename = newfilename;
                _vids.Edit(vid);

                //Write file to storage -  C:\repos\hsStudentProfile\web\src\assets\pictures;
                using (Stream file = File.Create(_storageConfig.Videos + newfilename))
                {
                    CopyStream(stream, file);
                }

                return vid.id;
            }
            catch (Exception ex)
            {
                //Log error here
                return 0;
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
