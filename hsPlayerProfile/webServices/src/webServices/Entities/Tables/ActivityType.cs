using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webServices.Entities
{
    public class ActivityType : IEntityBase
    {
        public ActivityType()
        {
        }

        public int? id { get; set; }
        public string activitytype { get; set; }
        public DateTime? created { get; set; }
    }
}
