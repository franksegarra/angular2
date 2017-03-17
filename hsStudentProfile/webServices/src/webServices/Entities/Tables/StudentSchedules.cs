using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webServices.Entities
{
    public class StudentSchedules : IEntityBase, IStudentEntityBase
    {
        public StudentSchedules()
        {
        }

        public int? id { get; set; }
        public int studentid { get; set; }
        public DateTime activitydate { get; set; }
        public string starttime { get; set; }
        public int activityid { get; set; }
        public string activitydesc { get; set; }
        public int activitytypeid { get; set; }
        public string location { get; set; }
        public string linkText { get; set; }
        public DateTime? created { get; set; }
    }
}
