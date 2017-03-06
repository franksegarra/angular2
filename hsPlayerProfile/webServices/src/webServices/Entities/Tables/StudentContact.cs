using System;

namespace webServices.Entities
{
    public class StudentContact : IEntityBase, IStudentEntityBase
    {
        public StudentContact()
        {
        }

        public int? id { get; set; }
        public int studentid { get; set; }
        public string contactname { get; set; }
        public string contactemail { get; set; }
        public string contactphone { get; set; }
        public string message { get; set; }
        public DateTime? created { get; set; }
    }
}
