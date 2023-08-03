using MakeMyTrip.Models;
using Microsoft.EntityFrameworkCore;
using System.Numerics;

namespace MakeMyTrip.Data
{
    public class MakeTripContext : DbContext
    {
        public MakeTripContext(DbContextOptions<MakeTripContext> options) : base(options) { }
        public DbSet<Admin_User> Admin_s { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Hotel> Hotel { get; set; }
        public DbSet<PackageOffering> PackageOffering { get; set; }
        public DbSet<Specialty> Specialty { get; set; }
        public DbSet<Spot> Spot { get; set; }
        public DbSet<Transaction> Transaction { get; set; }
        public DbSet<AdminImageGallery> AdminImagecheck { get; set; }
        public DbSet<TravelAgent> TravelAgent { get; set; }
        public DbSet<Feedback> Feedbacks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

    }
}