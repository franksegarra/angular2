using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webServices.Entities.Email;

namespace webServices.Infrastructure.EmailService
{
    public interface IEmailService
    {
        Task SendEmailAsync(IEmailMessage emailmessage);
    }
}
