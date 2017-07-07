using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using System;
using System.IO;
using System.Linq;
using webServices.Entities;
using webServices.Repositories;

namespace webServices.Infrastructure.FileService
{
    public class UpdateStudentProfilePicId : IUpdateProfileId
    {
        EntityBaseRepository<Student> _students;

        public UpdateStudentProfilePicId(EntityBaseRepository<Student> students)
        {
            _students = students;
        }

        public int UpdateID(int studentid, int pictureid)
        {
            try
            {
                var student = _students.FindBy(s => s.id == studentid).FirstOrDefault();
                if (student == null)
                    return 0;

                student.profilepictureid = pictureid;
                _students.Edit(student);
                return pictureid;
            }
            catch (Exception ex)
            {
                //Log error here
                return 0;
            }
        }

    }
}
