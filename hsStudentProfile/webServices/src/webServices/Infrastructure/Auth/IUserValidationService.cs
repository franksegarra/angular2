using System.Security.Claims;
using System.Threading.Tasks;
using webServices.Entities;
using webServices.Repositories;

namespace webServices.Infrastructure.Auth
{
    public interface IUserValidationService
    {
        Task<bool> AddUserAsync(Users user);
        void ChangePassword(string profilename, string password);
        string CreateSalt();
        string PasswordHash(string password, string salt);
        Task<ClaimsIdentity> ValidateUserAsync(string profilename, string password);
        bool VerifyPassword(string password, string passHash, string userSalt);
    }
}