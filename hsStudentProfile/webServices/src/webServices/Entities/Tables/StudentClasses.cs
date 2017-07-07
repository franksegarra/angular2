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
        public int? grade { get; set; }
        public string classname { get; set; }
        public short? finalaverage { get; set; }
        public string lettergrade { get; set; }
        public short? collegecredit { get; set; }
        public DateTime? created { get; set; }
    }
}
