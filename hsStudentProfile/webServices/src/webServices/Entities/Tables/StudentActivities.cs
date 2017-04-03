using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webServices.Entities
{
    public class StudentActivities : IEntityBase, IStudentEntityBase
    {
        public StudentActivities()
        {
        }
        public int? id { get; set; }
        public int studentid { get; set; }
        public int activityid { get; set; }
        public string coachname { get; set; }
        public string coachemail { get; set; }
        public string coachphone { get; set; }
        public DateTime? created { get; set; }
    }
}
