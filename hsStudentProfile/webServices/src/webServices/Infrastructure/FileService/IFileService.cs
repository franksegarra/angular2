using System.IO;
using System.Threading.Tasks;
using webServices.Entities;

namespace webServices.Infrastructure.FileService
{
    public interface IFileService
    {
        Task<int> UpdateProfilePictureAsync(StudentPictures pic, Stream stream, IUpdateProfileId updtProfId);
        Task<int> AddPictureAsync(StudentPictures pic, Stream stream);
        int DeletePicture(int id);
        Task<int> AddVideoAsync(StudentVideos pic, Stream stream);
        int DeleteVideo(int id);

    }
}