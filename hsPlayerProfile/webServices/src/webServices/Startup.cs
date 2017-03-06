using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using webServices.Infrastructure;
using Microsoft.EntityFrameworkCore;
using webServices.Repositories;
using Newtonsoft.Json.Serialization;
using System.IO;
using webServices.Entities;
using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using webServices.Entities.Email;
using webServices.Infrastructure.EmailService;

namespace webServices
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            #region Cors
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });

            #endregion Cors

            #region Database Connection
            string sqlConnectionString;

            if (Environment.MachineName == "FRSTOSHIBA17")
                sqlConnectionString = Configuration["ConnectionStrings:FRSConnection"];
            else if (Environment.MachineName == "CRP-IT-PF00W8DJ") 
                sqlConnectionString = Configuration["ConnectionStrings:IMConnection"];
            else
                sqlConnectionString = Configuration["ConnectionStrings:DefaultConnection"];


            bool useInMemoryProvider = bool.Parse(Configuration["Data:PhotoGalleryConnection:InMemoryProvider"]);

            services.AddDbContext<hsPlayerProfileContext>(options =>
            {
                switch (useInMemoryProvider)
                {
                    case true:
                        options.UseInMemoryDatabase();
                        break;
                    default:
                        options.UseSqlServer(sqlConnectionString);
                        break;
                }
            });

            #endregion Database Connection

            #region Repositories

            services.AddScoped<EntityBaseRepository<Activity>, EntityBaseRepository<Activity>>();
            services.AddScoped<EntityBaseRepository<ActivityType>, EntityBaseRepository<ActivityType>>();
            services.AddScoped<EntityBaseRepository<HighSchool>, EntityBaseRepository<HighSchool>>();
            services.AddScoped<EntityBaseRepository<Student>, EntityBaseRepository<Student>>();
            services.AddScoped<EntityBaseRepository<StudentClasses>, EntityBaseRepository<StudentClasses>>();
            services.AddScoped<EntityBaseRepository<StudentExtraCurricular>, EntityBaseRepository<StudentExtraCurricular>>();
            services.AddScoped<EntityBaseRepository<StudentSchedules>, EntityBaseRepository<StudentSchedules>>();
            services.AddScoped<EntityBaseRepository<StudentLinks>, EntityBaseRepository<StudentLinks>>();
            services.AddScoped<EntityBaseRepository<StudentActivities>, EntityBaseRepository<StudentActivities>>();
            services.AddScoped<EntityBaseRepository<StudentProfile>, EntityBaseRepository<StudentProfile>>();
            services.AddScoped<EntityBaseRepository<StudentVideos>, EntityBaseRepository<StudentVideos>>();
            services.AddScoped<EntityBaseRepository<StudentPictures>, EntityBaseRepository<StudentPictures>>();
            services.AddScoped<EntityBaseRepository<StudentSchedWithActivity>, EntityBaseRepository<StudentSchedWithActivity>>();
            services.AddScoped<EntityBaseRepository<StudentBaseball>, EntityBaseRepository<StudentBaseball>>();
            services.AddScoped<EntityBaseRepository<StudentBaseballProfile>, EntityBaseRepository<StudentBaseballProfile>>();
            services.AddScoped<EntityBaseRepository<StudentBBHittingStats>, EntityBaseRepository<StudentBBHittingStats>>();
            services.AddScoped<EntityBaseRepository<StudentContact>, EntityBaseRepository<StudentContact>>();

            // Register email service 
            services.AddTransient<IEmailService, EmailService>();

            #endregion Repositories

            #region MVC

            services.AddMvc()
            .AddJsonOptions(opt =>
            {
                var resolver = opt.SerializerSettings.ContractResolver;
                if (resolver != null)
                {
                    var res = resolver as DefaultContractResolver;
                    res.NamingStrategy = null;
                }
            });

            #endregion MVC

            #region Email

            services.Configure<EmailConfig>(Configuration.GetSection("Email"));

            #endregion Email

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseCors("CorsPolicy");

            app.UseMvc(routes =>
            {
                routes.MapRoute(name: "DefaultApi", template: "api/{controller}/{id}");

                // Uncomment the following line to add a route for porting Web API 2 controllers.
                //routes.MapWebApiRoute("DefaultApi", "api/{controller}/{id?}");
            });
        }

        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }

    }
}
