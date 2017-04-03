using System;

namespace webServices.Entities
{
    public class Guest : IEntityBase
    {
        public Guest()
        {
        }

        public int? id { get; set; }
        public string password { get; set; }
        public string passwordsalt { get; set; }
        public DateTime? created { get; set; }
    }
}
