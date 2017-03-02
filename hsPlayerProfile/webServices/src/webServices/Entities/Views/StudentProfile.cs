using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webServices.Entities
{
    public class StudentProfile : IEntityBase
    {
        public StudentProfile()
        {
        }
        public int id { get; set; }
        public string profileName { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string primaryEmail { get; set; }
        public int highSchoolId { get; set; }
        public int graduationYear { get; set; }
        public string additionalInfo { get; set; }
        public decimal? gpa { get; set; }
        public DateTime? sattestdate { get; set; }
        public int? satscore { get; set; }
        public DateTime? acttestdate { get; set; }
        public int? actscore { get; set; }
        public string ncaaid { get; set; }
        public string phone { get; set; }
        public string streetaddress1 { get; set; }
        public string streetaddress2 { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string zip { get; set; }
        public short? displayaddrandphone { get; set; }
        public string highschoolname { get; set; }
    }
}
