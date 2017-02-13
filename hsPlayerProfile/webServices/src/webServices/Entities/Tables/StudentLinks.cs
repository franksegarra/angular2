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
        public string linkDescription { get; set; }
        public string linkUrl { get; set; }
    }
}
