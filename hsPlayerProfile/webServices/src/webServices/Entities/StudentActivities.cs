using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webServices.Entities
{
    public class StudentActivities : IEntityBase
    {
        public StudentActivities()
        {
        }
        public int id { get; set; }
        public int studentid { get; set; }
        public int activityid { get; set; }
        public string coachName { get; set; }
        public string coachEmail { get; set; }
        public string coachPhone { get; set; }
    }
}
