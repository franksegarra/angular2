using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webServices.Entities
{
    public class StudentBaseball : IEntityBase, IStudentEntityBase
    {
        public StudentBaseball()
        {
        }
        public int id { get; set; }
        public int studentid { get; set; }
        public int? statspictureid { get; set; }
        public decimal? runningtime { get; set; }
        public string bats { get; set; }
        public string throws { get; set; }
        public string travelteam { get; set; }
        public string travelurl { get; set; }
        public string runningtimelocation { get; set; }
        public string runningtimelocationurl { get; set; }
        public DateTime? created { get; set; }
    }
}
