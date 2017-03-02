using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webServices.Entities
{
    public class StudentClasses : IEntityBase, IStudentEntityBase
    {
        public StudentClasses()
        {
        }

        public int id { get; set; }
        public int studentid { get; set; }
        public int grade { get; set; }
        public string className { get; set; }
        public short? finalAverage { get; set; }
        public string letterGrade { get; set; }
        public short collegeCredit { get; set; }
    }
}
