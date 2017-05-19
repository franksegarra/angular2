using System.IO;
using webServices.Entities;

namespace webServices.Infrastructure.FileUpload
{
    public interface IFileUploadService
    {
        int UpdateStudentProfilePicture(StudentPictures pic, Stream stream);
        int AddPicture(StudentPictures pic, Stream stream);
    }
}