using Microsoft.EntityFrameworkCore;
using RoleBasedAuthorization.Data;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Repository.Interfaces;

namespace RoleBasedAuthorization.Repository.Services
{
    public class Doctorscl : IDoctor
    {
        private readonly RoleBasedAuthorizationDbContext _context;

        public Doctorscl(RoleBasedAuthorizationDbContext context)
        {
            _context = context;
        }

        public async Task<Doctors> PostDoctor(Doctors doctor)
        {
            var itm = await _context.Doctors.AddAsync(doctor);
            if (itm == null)
            {
                throw new Exception("error");
            }
            _context.SaveChanges();
            return doctor;
        }

        public async Task<IEnumerable<Doctors>> GetDoctors()
        {
            var gd = await _context.Doctors.ToListAsync();
            if (gd == null)
            {
                throw new Exception("error");
            }
            return gd;
        }

        public async Task<List<Doctors>> DeleteDoctors(string id)
        {
            var staff = await _context.Doctors.FirstOrDefaultAsync(s => s.userId == id);
            if (staff == null)
            {
                return null;
            }
            _context.Doctors.Remove(staff);
            await _context.SaveChangesAsync();
            return await _context.Doctors.ToListAsync();
        }
    }
}
