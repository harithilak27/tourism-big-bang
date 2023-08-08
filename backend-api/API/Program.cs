using JWTAuthenticationApp.Interfaces;
using JWTAuthenticationApp.Services;
using Microsoft.EntityFrameworkCore;
using RoleBasedAuthorization.Data;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Repository.Interfaces;
using RoleBasedAuthorization.Repository.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IBaseRepo<string, User>, UserRepo>();
builder.Services.AddScoped<ITokenGenerate, TokenService>();
builder.Services.AddScoped<IDoctor, Doctorscl>();
builder.Services.AddScoped<IAppointment, Appointmentcl>();
builder.Services.AddScoped<IActiveDoctors, ActiveDoctorscl>();
builder.Services.AddScoped<UserService>();
builder.Services.AddCors(opts =>
{
    opts.AddPolicy("AngularCORS", options =>
    {
        options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
    });
});
builder.Services.AddDbContext<RoleBasedAuthorizationDbContext>(optionsAction: options => options.UseSqlServer(builder.Configuration.GetConnectionString(name: "AdminSkill")));



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AngularCORS");
app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();
