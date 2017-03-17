using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webServices.Entities
{
    public class StudentExtraCurricular : IEntityBase, IStudentEntityBase
    {
        public StudentExtraCurricular()
        {
        }
        public int? id { get; set; }
        public int studentid { get; set; }
        public string ecName { get; set; }
        public string ecDescription { get; set; }
        public DateTime? created { get; set; }
    }
}
