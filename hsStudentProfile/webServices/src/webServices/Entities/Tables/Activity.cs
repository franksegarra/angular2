using System;

namespace webServices.Entities
{
    public class Activity : IEntityBase
    {
        public Activity()
        {
        }

        public int id { get; set; }
        public string activity { get; set; }
        public DateTime? created { get; set; }
    }
}
