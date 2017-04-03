using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webServices.Entities
{
    public class HighSchool : IEntityBase
    {
        public HighSchool()
        {
        }

        public int? id { get; set; }
        public string highschoolname { get; set; }
        public DateTime? created { get; set; }
    }
}
