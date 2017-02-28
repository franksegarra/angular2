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
            #region Database Connection

            string sqlConnectionString = Configuration["ConnectionStrings:DefaultConnection"];
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
            services.AddScoped<EntityBaseRepository<StudentSchedules>, EntityBaseRepository<StudentSchedules>>();
            services.AddScoped<EntityBaseRepository<StudentLinks>, EntityBaseRepository<StudentLinks>>();

            services.AddScoped<EntityBaseRepository<StudentActivities>, EntityBaseRepository<StudentActivities>>();
            services.AddScoped<EntityBaseRepository<StudentProfile>, EntityBaseRepository<StudentProfile>>();
            services.AddScoped<EntityBaseRepository<StudentVideos>, EntityBaseRepository<StudentVideos>>();
            services.AddScoped<EntityBaseRepository<StudentPictures>, EntityBaseRepository<StudentPictures>>();

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
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

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
