using System;

namespace webServices.Entities
{
    public class UserLoginHistory : IEntityBase
    {
        public UserLoginHistory()
        {
        }

        public int id { get; set; }
        public DateTime? created { get; set; }
        public DateTime? logouttime { get; set; }
        public string ipaddress { get; set; }
    }
}
