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
        public int? highschoolid { get; set; }
        public int? graduationyear { get; set; }
        public string additionalinfo { get; set; }
        public decimal? gpa { get; set; }
        public DateTime? sattestdate { get; set; }
        public int? satscore { get; set; }
        public DateTime? acttestdate { get; set; }
        public int? actscore { get; set; }
        public string ncaaid { get; set; }
        public int? profilepictureid { get; set; }
        public string height { get; set; }
        public string weight { get; set; }
        public DateTime? created { get; set; }
        public string collegemajor { get; set; }
    }
}
