using Microsoft.EntityFrameworkCore;
using RoleBasedAuthorization.Data;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Repository.Interfaces;

namespace RoleBasedAuthorization.Repository.Services
{
    public class ActiveDoctorscl : IActiveDoctors
    {
        private readonly RoleBasedAuthorizationDbContext _context;

        public ActiveDoctorscl(RoleBasedAuthorizationDbContext context)
        {
            _context = context;
        }

        public async Task<ActiveDoctors> PostActiveDoctor(ActiveDoctors activedoctors)
        {
            var itm = await _context.ActiveDoctors.AddAsync(activedoctors);
            if (itm == null)
            {
                throw new Exception("error");
            }
            _context.SaveChanges();
            return activedoctors;
        }

        public async Task<IEnumerable<ActiveDoctors>> GetActiveDoctors()
        {
            var gd = await _context.ActiveDoctors.ToListAsync();
            if (gd == null)
            {
                throw new Exception("error");
            }
            return gd;
        }

        public async Task<List<ActiveDoctors>> DeleteActiveDoctors(string id)
        {
            var staff = await _context.ActiveDoctors.FirstOrDefaultAsync(s => s.userId == id);
            if (staff == null)
            {
                return null;
            }
            _context.ActiveDoctors.Remove(staff);
            await _context.SaveChangesAsync();
            return await _context.ActiveDoctors.ToListAsync();
        }
    }
}
