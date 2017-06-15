using System.IO;
using webServices.Entities;

namespace webServices.Infrastructure.FileService
{
    public interface IFileService
    {
        int UpdateStudentProfilePicture(StudentPictures pic, Stream stream);
        int AddPicture(StudentPictures pic, Stream stream);
        int DeletePicture(int id);
    }
}