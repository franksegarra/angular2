using Microsoft.EntityFrameworkCore;
using webServices.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace webServices.Infrastructure
{
    public class hsPlayerProfileContext : DbContext
    {
        public DbSet<Activity> Activity { get; set; }
        public DbSet<ActivityType> ActivityType { get; set; }
        public DbSet<HighSchool> HighSchool { get; set; }
        public DbSet<Student> Student { get; set; }
        public DbSet<StudentClasses> StudentClasses { get; set; }
        public DbSet<StudentSchedules> StudentSchedules { get; set; }
        public DbSet<StudentLinks> StudentLinks { get; set; }

        public DbSet<StudentActivities> StudentActivities { get; set; }
        public DbSet<StudentProfile> StudentProfile { get; set; }

        public hsPlayerProfileContext(DbContextOptions<hsPlayerProfileContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var entity in modelBuilder.Model.GetEntityTypes())
            {
                entity.Relational().TableName = entity.DisplayName();
            }

            // Activity
            modelBuilder.Entity<Activity>().Property(p => p.activity).HasMaxLength(100);
            modelBuilder.Entity<Activity>().Property(p => p.id).IsRequired();

            // ActivityType
            modelBuilder.Entity<ActivityType>().Property(p => p.activitytype).HasMaxLength(100);
            modelBuilder.Entity<ActivityType>().Property(p => p.id).IsRequired();

            // HighSchool
            modelBuilder.Entity<HighSchool>().Property(p => p.highSchoolName).HasMaxLength(100);
            modelBuilder.Entity<HighSchool>().Property(p => p.id).IsRequired();

            // Student
            modelBuilder.Entity<Student>().Property(p => p.firstName).HasMaxLength(50);
            modelBuilder.Entity<Student>().Property(p => p.firstName).IsRequired();
            modelBuilder.Entity<Student>().Property(p => p.lastName).HasMaxLength(50);
            modelBuilder.Entity<Student>().Property(p => p.lastName).IsRequired();
            modelBuilder.Entity<Student>().Property(p => p.profileName).HasMaxLength(50);
            modelBuilder.Entity<Student>().Property(p => p.profileName).IsRequired();
            modelBuilder.Entity<Student>().Property(p => p.primaryEmail).HasMaxLength(100);
            modelBuilder.Entity<Student>().Property(p => p.primaryEmail).IsRequired();
            modelBuilder.Entity<Student>().Property(p => p.id).IsRequired();

            // StudentClasses
            modelBuilder.Entity<StudentClasses>().Property(p => p.className).HasMaxLength(50);
            modelBuilder.Entity<StudentClasses>().Property(p => p.letterGrade).HasMaxLength(2);
            modelBuilder.Entity<StudentClasses>().Property(p => p.id).IsRequired();
            modelBuilder.Entity<StudentClasses>().Property(p => p.studentid).IsRequired();
            modelBuilder.Entity<StudentClasses>().Property(p => p.grade).IsRequired();

            // StudentSchedules
            modelBuilder.Entity<StudentSchedules>().Property(p => p.activitydesc).HasMaxLength(255);
            modelBuilder.Entity<StudentSchedules>().Property(p => p.id).IsRequired();
            modelBuilder.Entity<StudentSchedules>().Property(p => p.studentid).IsRequired();
            modelBuilder.Entity<StudentSchedules>().Property(p => p.activitydate).IsRequired();
            modelBuilder.Entity<StudentSchedules>().Property(p => p.starttime).IsRequired();
            modelBuilder.Entity<StudentSchedules>().Property(p => p.activityid).IsRequired();
            modelBuilder.Entity<StudentSchedules>().Property(p => p.activitydesc).IsRequired();
            modelBuilder.Entity<StudentSchedules>().Property(p => p.activitytypeid).IsRequired();
            modelBuilder.Entity<StudentSchedules>().Property(p => p.location).IsRequired();

            // StudentLinks
            modelBuilder.Entity<StudentLinks>().Property(p => p.linkDescription).HasMaxLength(100);
            modelBuilder.Entity<StudentLinks>().Property(p => p.linkUrl).HasMaxLength(255);
            modelBuilder.Entity<StudentLinks>().Property(p => p.id).IsRequired();
            modelBuilder.Entity<StudentLinks>().Property(p => p.studentid).IsRequired();
            modelBuilder.Entity<StudentLinks>().Property(p => p.linkDescription).IsRequired();
            modelBuilder.Entity<StudentLinks>().Property(p => p.linkUrl).IsRequired();

            // StudentActivities
            modelBuilder.Entity<StudentActivities>().Property(p => p.coachEmail).HasMaxLength(100);
            modelBuilder.Entity<StudentActivities>().Property(p => p.coachName).HasMaxLength(255);
            modelBuilder.Entity<StudentActivities>().Property(p => p.coachPhone).HasMaxLength(50);
            modelBuilder.Entity<StudentActivities>().Property(p => p.id).IsRequired();
            modelBuilder.Entity<StudentActivities>().Property(p => p.studentid).IsRequired();
            modelBuilder.Entity<StudentActivities>().Property(p => p.activityid).IsRequired();



        }
    }
}
