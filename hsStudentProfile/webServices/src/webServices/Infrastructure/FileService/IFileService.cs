using System.IO;
using webServices.Entities;

namespace webServices.Infrastructure.FileService
{
    public interface IFileService
    {
        int UpdateProfilePicture(StudentPictures pic, Stream stream, IUpdateProfileId updtProfId);
        int AddPicture(StudentPictures pic, Stream stream);
        int DeletePicture(int id);
        int AddVideo(StudentVideos pic, Stream stream);
        int DeleteVideo(int id);

    }
}