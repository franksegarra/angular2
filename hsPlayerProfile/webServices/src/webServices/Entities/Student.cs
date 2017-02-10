using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webServices.Entities
{
    public class Student : IEntityBase
    {
        public Student()
        {
        }

        public int id { get; set; }
        public string lastName { get; set; }
        public string firstName { get; set; }
        public int highSchoolId { get; set; }
        public string profileName { get; set; }
        public string primaryEmail { get; set; }
    }
}
