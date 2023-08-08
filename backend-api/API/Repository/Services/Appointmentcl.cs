using Microsoft.EntityFrameworkCore;
using RoleBasedAuthorization.Data;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Repository.Interfaces;

namespace RoleBasedAuthorization.Repository.Services
{
    public class Appointmentcl : IAppointment
    {
        private readonly RoleBasedAuthorizationDbContext _context;
        public Appointmentcl(RoleBasedAuthorizationDbContext context) 
        {
            _context = context;
        }

        public async Task<Appointments> PostAppointment(Appointments appointment)
        {
            var itm = await _context.Appointments.AddAsync(appointment);
            if (itm == null)
            {
                throw new Exception("error");
            }
            _context.SaveChanges();
            return appointment;
        }

        public async Task<IEnumerable<Appointments>> GetAppointments()
        {
            var gd = await _context.Appointments.ToListAsync();
            if (gd == null)
            {
                throw new Exception("error");
            }
            return gd;
        }

        public async Task<List<Appointments>> DeleteAppointment(string id)
        {
            var staff = await _context.Appointments.FirstOrDefaultAsync(s => s.AppointmentId == id);
            if (staff == null)
            {
                return null;
            }
            _context.Appointments.Remove(staff);
            await _context.SaveChangesAsync();
            return await _context.Appointments.ToListAsync();
        }
    }
}
