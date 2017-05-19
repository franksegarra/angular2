using System.IO;
using webServices.Entities;

namespace webServices.Infrastructure.FileUpload
{
    public interface IPictureUploadService
    {
        bool AddProfilePicture(StudentPictures pic, Stream stream);
    }
}