using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webServices.Entities
{
    public class StudentBBHittingStats : IEntityBase, IStudentEntityBase
    {
        public StudentBBHittingStats()
        {
        }
        public int id { get; set; }
        public int studentid { get; set; }
        public string category { get; set; }
        public DateTime dateplayed { get; set; }
        public string teamplayed { get; set; }
        public int plateappearances { get; set; }
        public int strikeouts { get; set; }
        public int walks { get; set; }
        public int hitbypitch { get; set; }
        public int sacflys { get; set; }
        public int sacbunts { get; set; }
        public int singles { get; set; }
        public int doubles { get; set; }
        public int triples { get; set; }
        public int homeruns { get; set; }
        public int runsbattediin { get; set; }
        public int runsscored { get; set; }
        public int stolenbases { get; set; }
        public int atbats { get; set; }
        public int totalbases { get; set; }
        public int hits { get; set; }
        public double battingaverage { get; set; }
        public double onbasepercentage { get; set; }
        public double slugging { get; set; }
        public double onbaseplusslugging { get; set; }
        public DateTime? created { get; set; }
    }
}
