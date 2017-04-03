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
using webServices.Entities.Email;
using webServices.Infrastructure.EmailService;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using webServices.Infrastructure.JWT;
using webServices.Infrastructure.Auth;

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
        
        //TODO: Replace Secret key
        private const string SecretKey = "needtogetthisfromenvironment";
        private readonly SymmetricSecurityKey _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecretKey));

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddOptions();

            #region Configuration

            services.AddSingleton<IConfiguration>(Configuration);

            #endregion Configuration

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
            services.AddScoped<EntityBaseRepository<StudentProfilePictures>, EntityBaseRepository<StudentProfilePictures>>();
            services.AddScoped<EntityBaseRepository<SiteFeedback>, EntityBaseRepository<SiteFeedback>>();
            services.AddScoped<EntityBaseRepository<StudentCoaches>, EntityBaseRepository<StudentCoaches>>();
            services.AddScoped<EntityBaseRepository<Users>, EntityBaseRepository<Users>>();
            services.AddScoped<EntityBaseRepository<UserLoginHistory>, EntityBaseRepository<UserLoginHistory>>();
            services.AddScoped<EntityBaseRepository<UserRoles>, EntityBaseRepository<UserRoles>>();
            services.AddScoped<EntityBaseRepository<Guest>, EntityBaseRepository<Guest>>();

            // Register email service 
            services.AddTransient<IEmailService, EmailService>();

            //User service
            services.AddSingleton<IUserValidationService, UserValidationService>();

            #endregion Repositories

            #region MVC

            services.AddMvc(config =>
            {
                var policy = new AuthorizationPolicyBuilder()
                                 .RequireAuthenticatedUser()
                                 .Build();
                config.Filters.Add(new AuthorizeFilter(policy));
            })
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

            #region Authorization token
                //TODO: Set up policies
                // Use policy auth.
                services.AddAuthorization(options =>
                {
                    options.AddPolicy("guest", policy => policy.RequireClaim("Role", "guest"));
                    options.AddPolicy("student", policy => policy.RequireClaim("Role", "student"));
                    options.AddPolicy("coach", policy => policy.RequireClaim("Role", "coach"));
                    options.AddPolicy("admin", policy => policy.RequireClaim("Role", "admin"));
                });

                // Get options from app settings
                var jwtAppSettingOptions = Configuration.GetSection(nameof(JwtIssuerOptions));

                // Configure JwtIssuerOptions
                services.Configure<JwtIssuerOptions>(options =>
                {
                    options.Issuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
                    options.Audience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)];
                    options.SigningCredentials = new SigningCredentials(_signingKey, SecurityAlgorithms.HmacSha256);
                });

            #endregion Authorization token

            #region Email

            services.Configure<EmailConfig>(Configuration.GetSection("Email"));

            #endregion Email

            //services.Configure<IISOptions>(options => {
            //});
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            var jwtAppSettingOptions = Configuration.GetSection(nameof(JwtIssuerOptions));
            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)],

                ValidateAudience = true,
                ValidAudience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)],

                ValidateIssuerSigningKey = true,
                IssuerSigningKey = _signingKey,

                RequireExpirationTime = true,
                ValidateLifetime = true,

                ClockSkew = TimeSpan.Zero
            };

            app.UseJwtBearerAuthentication(new JwtBearerOptions
            {
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
                TokenValidationParameters = tokenValidationParameters
            });

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
