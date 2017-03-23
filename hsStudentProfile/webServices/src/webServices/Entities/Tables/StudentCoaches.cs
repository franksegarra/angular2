using System;

namespace webServices.Entities
{
    public class StudentCoaches : IEntityBase, IStudentEntityBase
    {
        public StudentCoaches()
        {
        }

        public int? id { get; set; }
        public int studentid { get; set; }
        public int sortorder { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public DateTime? created { get; set; }
    }
}
