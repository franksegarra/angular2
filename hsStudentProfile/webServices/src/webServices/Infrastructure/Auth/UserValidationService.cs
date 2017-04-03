using System;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Security.Principal;
using webServices.Entities;
using webServices.Entities.Email;
using webServices.Infrastructure.EmailService;
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
        private EntityBaseRepository<UserLoginHistory> _loginhistory { get; set; }
        private readonly IEmailService _emailService;

        private const int SaltSize = 16, HashIter = 10000, HashSize = 20;

        public UserValidationService(
            EntityBaseRepository<Guest> guest, 
            EntityBaseRepository<Users> users, 
            EntityBaseRepository<Student> students,
            EntityBaseRepository<UserLoginHistory> loginhistory,
            IEmailService emailService
            )
        {
            _guest = guest;
            _users = users;
            _students = students;
            _loginhistory = loginhistory;
            _emailService = emailService;
        }

        public bool AddUser(Users user)
        {
            try
            {

                //User row
                Users newUser = new Users();
                newUser.profilename = user.profilename;
                newUser.primaryemail = user.primaryemail;
                newUser.roleid = user.roleid;
                newUser.passwordsalt = CreateSalt();
                newUser.password = PasswordHash(user.password, newUser.passwordsalt);
                newUser.passwordfailuressincelastsuccess = 0;
                newUser.isconfirmed = false;
                newUser.created = DateTime.Now;
                _users.Add(newUser);

                if (newUser.roleid == 2)
                {
                    Student st = new Student();
                    st.id = newUser.id;
                    st.created = newUser.created;
                    _students.Add(st);
                }
                else
                {
                    //Coach
                }

                //Send Activation email


                return true;
            }
            catch (Exception ex)
            {
                //Log error here
                return false;
            }
        }

        public bool ActivateUser(Users user)
        {
            return true;
        }

        public bool ForgotPassword(Users user)
        {
            return true;
        }

        public bool ResetForgotPassword(Users user)
        {
            return true;
        }

        public bool ForgotProfileName(Users user)
        {
            return true;
        }

        public ClaimsIdentity ValidateUser(string profilename, string password)
        {
            string passHash;
            string userSalt;
            Guest guest = null;
            Users user = null;

            try
            {
                //Get profilename, password, and salt from user table
                if (profilename.ToLower() == "guest")
                {
                    //Only one row.  Just get it
                    guest = _guest.GetAll().FirstOrDefault();
                    passHash = guest.password;
                    userSalt = guest.passwordsalt;
                }
                else
                {
                    user = _users.FindBy(u => u.profilename == profilename).FirstOrDefault();
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
                    if (profilename.ToLower() == "guest")
                    {
                        return new ClaimsIdentity
                        (
                            new GenericIdentity(profilename, "Token"),
                            new[] { new Claim("Role", "guest") }
                        );
                    }
                    else
                    {
                        //Add row to login history
                        UserLoginHistory ulh = new UserLoginHistory();
                        ulh.id = user.id;
                        ulh.created = DateTime.Now;
                        _loginhistory.Add(ulh);

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
                            new GenericIdentity(profilename, "Token"),
                            new[] { new Claim("Role", role),
                                    new Claim("userid", user.id.ToString()),
                                    new Claim("firstname", user.firstname)
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

        //Normal Change Password
        public void ChangePassword(string profilename, string password)
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
        
        public EmailMessage SendActivationEmail()
        {
            EmailMessage newEmail = new EmailMessage();
            return newEmail;
        }
        public EmailMessage SendConfirmationEmail()
        {
            EmailMessage newEmail = new EmailMessage();
            return newEmail;
        }
        public EmailMessage SendResetPasswordEmail()
        {
            EmailMessage newEmail = new EmailMessage();
            return newEmail;
        }
        public EmailMessage SendUserIdEmail()
        {
            EmailMessage newEmail = new EmailMessage();
            return newEmail;
        }
    }
}
