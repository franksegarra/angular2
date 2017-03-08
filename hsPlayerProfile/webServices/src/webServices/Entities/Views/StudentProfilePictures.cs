using System;

namespace webServices.Entities
{
    public class StudentProfilePictures : IEntityBase, IStudentEntityBase
    {
        public StudentProfilePictures()
        {
        }
        public int? id { get; set; }
        public int studentid { get; set; }
        public int pictureid { get; set; }
        public string picturetype { get; set; }
        public DateTime? created { get; set; }
    }
}
