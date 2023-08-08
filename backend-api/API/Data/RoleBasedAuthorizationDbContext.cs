
using Microsoft.EntityFrameworkCore;
using RoleBasedAuthorization.Models;

namespace RoleBasedAuthorization.Data
{
    public class RoleBasedAuthorizationDbContext : DbContext
    {
        public RoleBasedAuthorizationDbContext(DbContextOptions<RoleBasedAuthorizationDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Appointments> Appointments { get; set; }
        public DbSet<Agency> Doctors { get; set; }
        public DbSet<ActiveAgencies> ActiveDoctors { get; set;}


    }
}
