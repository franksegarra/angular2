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
        public DbSet<StudentExtraCurricular> StudentExtraCurricular { get; set; }
        public DbSet<StudentSchedules> StudentSchedules { get; set; }
        public DbSet<StudentLinks> StudentLinks { get; set; }
        public DbSet<StudentActivities> StudentActivities { get; set; }
        public DbSet<StudentProfile> StudentProfile { get; set; }
        public DbSet<StudentVideos> StudentVideos { get; set; }
        public DbSet<StudentPictures> StudentPictures { get; set; }
        public DbSet<StudentSchedWithActivity> StudentSchedWithActivity { get; set; }
        public DbSet<StudentBaseball> StudentBaseball { get; set; }
        public DbSet<StudentBaseballProfile> StudentBaseballProfile { get; set; }
        public DbSet<StudentBBHittingStats> StudentBBHittingStats { get; set; }
        public DbSet<StudentContact> StudentContact { get; set; }
        public DbSet<StudentProfilePictures> StudentProfilePictures { get; set; }
        public DbSet<SiteFeedback> SiteFeedback { get; set; }
       
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

            // ActivityType
            modelBuilder.Entity<ActivityType>().Property(p => p.activitytype).HasMaxLength(100);

            // HighSchool
            modelBuilder.Entity<HighSchool>().Property(p => p.highSchoolName).HasMaxLength(100);

            // Student
            modelBuilder.Entity<Student>().Property(p => p.firstName).HasMaxLength(50);
            modelBuilder.Entity<Student>().Property(p => p.firstName).IsRequired();
            modelBuilder.Entity<Student>().Property(p => p.lastName).HasMaxLength(50);
            modelBuilder.Entity<Student>().Property(p => p.lastName).IsRequired();
            modelBuilder.Entity<Student>().Property(p => p.profileName).HasMaxLength(50);
            modelBuilder.Entity<Student>().Property(p => p.profileName).IsRequired();
            modelBuilder.Entity<Student>().Property(p => p.primaryEmail).HasMaxLength(100);
            modelBuilder.Entity<Student>().Property(p => p.primaryEmail).IsRequired();

            // StudentClasses
            modelBuilder.Entity<StudentClasses>().Property(p => p.className).HasMaxLength(50);
            modelBuilder.Entity<StudentClasses>().Property(p => p.letterGrade).HasMaxLength(2);
            modelBuilder.Entity<StudentClasses>().Property(p => p.studentid).IsRequired();
            modelBuilder.Entity<StudentClasses>().Property(p => p.grade).IsRequired();

            // StudentExtraCurricular
            modelBuilder.Entity<StudentExtraCurricular>().Property(p => p.studentid).IsRequired();
            modelBuilder.Entity<StudentExtraCurricular>().Property(p => p.ecName).IsRequired();
            modelBuilder.Entity<StudentExtraCurricular>().Property(p => p.ecDescription).IsRequired();
            modelBuilder.Entity<StudentExtraCurricular>().Property(p => p.ecName).HasMaxLength(100);

            // StudentSchedules
            modelBuilder.Entity<StudentSchedules>().Property(p => p.activitydesc).HasMaxLength(255);
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
            modelBuilder.Entity<StudentLinks>().Property(p => p.studentid).IsRequired();
            modelBuilder.Entity<StudentLinks>().Property(p => p.linkDescription).IsRequired();
            modelBuilder.Entity<StudentLinks>().Property(p => p.linkUrl).IsRequired();

            // StudentActivities
            modelBuilder.Entity<StudentActivities>().Property(p => p.coachEmail).HasMaxLength(100);
            modelBuilder.Entity<StudentActivities>().Property(p => p.coachName).HasMaxLength(255);
            modelBuilder.Entity<StudentActivities>().Property(p => p.coachPhone).HasMaxLength(50);
            modelBuilder.Entity<StudentActivities>().Property(p => p.studentid).IsRequired();
            modelBuilder.Entity<StudentActivities>().Property(p => p.activityid).IsRequired();

            //StudentVideos
            modelBuilder.Entity<StudentVideos>().Property(p => p.category).HasMaxLength(50);
            modelBuilder.Entity<StudentVideos>().Property(p => p.title).HasMaxLength(100);
            modelBuilder.Entity<StudentVideos>().Property(p => p.filename).HasMaxLength(100);
            modelBuilder.Entity<StudentVideos>().Property(p => p.description).HasMaxLength(255);
            modelBuilder.Entity<StudentVideos>().Property(p => p.studentid).IsRequired();
            modelBuilder.Entity<StudentVideos>().Property(p => p.category).IsRequired();
            modelBuilder.Entity<StudentVideos>().Property(p => p.title).IsRequired();
            modelBuilder.Entity<StudentVideos>().Property(p => p.filename).IsRequired();

            //StudentVideos
            modelBuilder.Entity<StudentPictures>().Property(p => p.category).HasMaxLength(50);
            modelBuilder.Entity<StudentPictures>().Property(p => p.title).HasMaxLength(100);
            modelBuilder.Entity<StudentPictures>().Property(p => p.filename).HasMaxLength(100);
            modelBuilder.Entity<StudentPictures>().Property(p => p.description).HasMaxLength(255);
            modelBuilder.Entity<StudentPictures>().Property(p => p.studentid).IsRequired();
            modelBuilder.Entity<StudentPictures>().Property(p => p.category).IsRequired();
            modelBuilder.Entity<StudentPictures>().Property(p => p.title).IsRequired();
            modelBuilder.Entity<StudentPictures>().Property(p => p.filename).IsRequired();

            //StudentBaseball
            modelBuilder.Entity<StudentBaseball>().Property(p => p.studentid).IsRequired();
            modelBuilder.Entity<StudentBaseball>().Property(p => p.bats).HasMaxLength(1);
            modelBuilder.Entity<StudentBaseball>().Property(p => p.throws).HasMaxLength(1);
            modelBuilder.Entity<StudentBaseball>().Property(p => p.travelTeam).HasMaxLength(100);
            modelBuilder.Entity<StudentBaseball>().Property(p => p.travelUrl).HasMaxLength(255);

            //StudentContact
            modelBuilder.Entity<StudentContact>().Property(p => p.studentid).IsRequired();
            modelBuilder.Entity<StudentContact>().Property(p => p.contactname).IsRequired();
            modelBuilder.Entity<StudentContact>().Property(p => p.contactemail).IsRequired();
            modelBuilder.Entity<StudentContact>().Property(p => p.message).IsRequired();
            modelBuilder.Entity<StudentContact>().Property(p => p.contactname).HasMaxLength(100);
            modelBuilder.Entity<StudentContact>().Property(p => p.contactphone).HasMaxLength(10);
            modelBuilder.Entity<StudentContact>().Property(p => p.contactemail).HasMaxLength(100);

            //Site Feedback
            modelBuilder.Entity<SiteFeedback>().Property(p => p.contactname).IsRequired();
            modelBuilder.Entity<SiteFeedback>().Property(p => p.contactemail).IsRequired();
            modelBuilder.Entity<SiteFeedback>().Property(p => p.message).IsRequired();
            modelBuilder.Entity<SiteFeedback>().Property(p => p.contactname).HasMaxLength(100);
            modelBuilder.Entity<SiteFeedback>().Property(p => p.contactphone).HasMaxLength(10);
            modelBuilder.Entity<SiteFeedback>().Property(p => p.contactemail).HasMaxLength(100);
        }
    }
}
