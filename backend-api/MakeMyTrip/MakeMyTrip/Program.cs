using Microsoft.EntityFrameworkCore;
using System.Text;
using MakeMyTrip.Data;
using Microsoft.IdentityModel.Tokens;

using Microsoft.AspNetCore.Authentication.JwtBearer;
using MakeMyTrip.Repository.User;
using MakeMyTrip.Repository.AgentRegister;
using Microsoft.Extensions.FileProviders;
using MakeMyTrip.Repository.AllTransaction;
using MakeMyTrip.Repository.Feedbacks;
using MakeMyTrip.Repository.Packages;
using MakeMyTrip.Repository.UserBooking;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<MakeTripContext>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("Tourism"));
});

//add userservice
builder.Services.AddScoped<IUser,UserService>();
//add agency in temp table
builder.Services.AddScoped<IAgents,AgentRegisterService>();
//add transaction depency injection
builder.Services.AddScoped<IUserTransaction,UserTransactionService>();
//add feedback
builder.Services.AddScoped<IFeedback,FeedbackService>();
//add packageoffring
builder.Services.AddScoped<IAllPack, AllPackages>();
//add bookings
builder.Services.AddScoped<IBooking, Booking>();


//for authentication
builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = false;
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("veryverysceret.....")),
        ValidateAudience = false,
        ValidateIssuer = false,
        ClockSkew = TimeSpan.Zero
    };
});

//add cors policy
builder.Services.AddCors(option =>
{
    option.AddPolicy("MytripTourism", builder =>
    {
        builder.AllowAnyHeader();
        builder.AllowAnyMethod();
        builder.AllowAnyOrigin();
    });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(Path.Combine(app.Environment.ContentRootPath, "Images")),
    RequestPath = "/Images"
});

app.UseHttpsRedirection();

app.UseCors("MytripTourism");

app.UseAuthorization();

app.MapControllers();

app.Run();
