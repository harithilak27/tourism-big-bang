using MakeMyTrip.Data;
using MakeMyTrip.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MakeMyTrip.Repository.Packages
{
    public class AllPackages : IAllPack
    {
        private readonly MakeTripContext _context;
        public AllPackages(MakeTripContext context)
        {
            _context = context;
        }

        public async Task<ActionResult<List<PackageOffering>>> GetAllPackages()
        {
            var details = await _context.PackageOffering.ToListAsync();
            return details;
        }

        public async Task<List<PackageOffering>> PostPackages(PackageOffering package)
        {
            var details = _context.Add(package);
            _context.SaveChangesAsync();
            return await _context.PackageOffering.ToListAsync();
        }
    }
}
