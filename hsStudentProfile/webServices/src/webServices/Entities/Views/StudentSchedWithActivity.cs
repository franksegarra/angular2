using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webServices.Entities
{
    public class StudentSchedWithActivity : IEntityBase, IStudentEntityBase
    {
        public StudentSchedWithActivity()
        {
        }

        public int id { get; set; }
        public int studentid { get; set; }
        public DateTime activitydate { get; set; }
        public string starttime { get; set; }
        public int activityid { get; set; }
        public string activitydesc { get; set; }
        public int activitytypeid { get; set; }
        public string venue { get; set; }
        public string address { get; set; }
        public string city { get; set; }
        public string statecode { get; set; }
        public string zipcode { get; set; }
        public string location { get; set; }
        public string activitytype { get; set; }
        public DateTime? created { get; set; }
    }
}
