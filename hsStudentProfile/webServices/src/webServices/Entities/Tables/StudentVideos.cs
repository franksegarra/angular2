using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webServices.Entities
{
    public class StudentVideos : IEntityBase, IStudentEntityBase
    {
        public StudentVideos()
        {
        }

        public int id { get; set; }
        public int studentid { get; set; }
        public string category { get; set; }
        public string title { get; set; }
        public string filename { get; set; }
        public string description { get; set; }
        public DateTime? created { get; set; }
        public long filesize { get; set; }
    }
}
