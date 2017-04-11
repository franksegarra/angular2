using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webServices.Entities
{
    public class StudentLinks : IEntityBase, IStudentEntityBase
    {
        public StudentLinks()
        {
        }

        public int id { get; set; }
        public int studentid { get; set; }
        public int activityid { get; set; }
        public string linkname { get; set; }
        public string linkdescription { get; set; }
        public string linkurl { get; set; }
        public DateTime? created { get; set; }
    }
}
