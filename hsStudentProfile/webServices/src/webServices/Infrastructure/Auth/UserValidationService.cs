using System;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Security.Principal;
using webServices.Entities;
using webServices.Repositories;

//To base64 string from bytes
//password.PasswordSalt = Convert.ToBase64String(passwordSaltKey);
//To bytes from base64 string
//byte[] passwordSalt = Convert.FromBase64String(passwordSaltKey);

namespace webServices.Infrastructure.Auth
{
    public class UserValidationService : IUserValidationService
    {
        private EntityBaseRepository<Guest> _guest { get; set; }
        private EntityBaseRepository<Users> _users { get; set; }
        private EntityBaseRepository<Student> _students { get; set; }

        private const int SaltSize = 16, HashIter = 10000, HashSize = 20;

        public UserValidationService(EntityBaseRepository<Guest> guest, EntityBaseRepository<Users> users, EntityBaseRepository<Student> students)
        {
            _guest = guest;
            _users = users;
            _students = students;
        }

        public ClaimsIdentity ValidateUser(string username, string password)
        {
            string passHash;
            string userSalt;
            Guest guest = null;
            Users user = null;

            try
            {
                //Get username, password, and salt from user table
                if (username.ToLower() == "guest")
                {
                    //Only one row.  Just get it
                    guest = _guest.GetAll().FirstOrDefault();
                    passHash = guest.password;
                    userSalt = guest.passwordsalt;
                }
                else
                {
                    user = _users.FindBy(u => u.profilename == username).FirstOrDefault();
                    passHash = user.password;
                    userSalt = user.passwordsalt;
                }

                //If we do not get back a password and salt, the is not a valid user
                if (passHash == "" || userSalt == "" || passHash == null || userSalt == null)
                {
                    var salt = CreateSalt();
                    var pwHash = PasswordHash(password, salt);
                    return null;
                }

                //Verify password
                if (VerifyPassword(password, passHash, userSalt))
                {
                    //If ok, create claim
                    if (username.ToLower() == "guest")
                    {
                        return new ClaimsIdentity
                        (
                            new GenericIdentity(username, "Token"),
                            new[] { new Claim("Role", "guest") }
                        );
                    }
                    else
                    {
                        string role;
                        switch (user.roleid)
                        {
                            case 2: role = "student";
                                break;
                            case 3: role = "coach";
                                break;
                            case 4: role = "admin";
                                break;
                            default: role = "guest";
                                break;
                        }

                        return new ClaimsIdentity
                        (
                            new GenericIdentity(username, "Token"),
                            new[] { new Claim("Role", role),
                                    new Claim("userid", user.id.ToString())
                            }
                        );
                    }
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }

            return null;
        }

        public bool AddUser(Users user)
        {
            try
            {
                user.passwordsalt = CreateSalt();
                user.password = PasswordHash(user.password, user.passwordsalt);
                user.passwordfailuressincelastsuccess = 0;
                _users.Add(user);
                
                Student st = new Student();
                st.id = user.id;
                _students.Add(st);

                return true;
            }
            catch (Exception ex)
            {
                //Log error here
                return false;
            }
        }

        public void ChangePassword(string username, string password)
        { }

        public bool VerifyPassword(string password, string passHash, string userSalt)
        {
            // convert returned password has into byte array
            byte[] storedpw = Convert.FromBase64String(passHash);

            //hash password supplied by user
            byte[] _salt = Convert.FromBase64String(userSalt);
            byte[] userpw = new Rfc2898DeriveBytes(password, _salt, HashIter).GetBytes(HashSize);

            for (int i = 0; i < HashSize; i++)
                if (storedpw[i] != userpw[i])
                    return false;

            //Password is good
            return true;
        }

        public string PasswordHash(string password, string salt)
        {
            byte[] passwordSalt = Convert.FromBase64String(salt);
            var _hash = new Rfc2898DeriveBytes(password, passwordSalt, HashIter).GetBytes(HashSize);
            return Convert.ToBase64String(_hash);
        }

        public string CreateSalt()
        {
            //Creates a password salt using RandomNumberGenerator
            var rng = RandomNumberGenerator.Create();
            var _salt = new byte[SaltSize];
            rng.GetBytes(_salt);
            return Convert.ToBase64String(_salt);
        }

    }
}
