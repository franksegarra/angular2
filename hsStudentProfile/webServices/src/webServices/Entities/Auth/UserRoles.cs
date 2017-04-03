using System;

namespace webServices.Entities
{
    public class UserRoles : IEntityBase
    {
        public UserRoles()
        {
        }

        public int? id { get; set; }
        public string role { get; set; }
        public DateTime? created { get; set; }
    }
}
