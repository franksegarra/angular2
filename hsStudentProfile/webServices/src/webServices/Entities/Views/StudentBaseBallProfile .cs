using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webServices.Entities
{
    public class StudentBaseballProfile : IEntityBase, IStudentEntityBase
    {
        public StudentBaseballProfile()
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
        public string primaryposition { get; set; }
        public string statspicturefilename { get; set; }
        public string runningtimelocation { get; set; }
        public string runningtimelocationurl { get; set; }
        public string p { get; set; }
        public string c { get; set; }
        public string b1 { get; set; }
        public string b2 { get; set; }
        public string b3 { get; set; }
        public string ss { get; set; }
        public string lf { get; set; }
        public string cf { get; set; }
        public string rf { get; set; }
        public DateTime? created { get; set; }
    }
}
