using System.Security.Claims;
using webServices.Entities;
using webServices.Repositories;

namespace webServices.Infrastructure.Auth
{
    public interface IUserValidationService
    {
        bool AddUser(Users user);
        void ChangePassword(string username, string password);
        string CreateSalt();
        string PasswordHash(string password, string salt);
        ClaimsIdentity ValidateUser(string username, string password);
        bool VerifyPassword(string password, string passHash, string userSalt);
    }
}