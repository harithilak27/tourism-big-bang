using RoleBasedAuthorization.Models;

namespace RoleBasedAuthorization.Repository.Interfaces
{
    public interface IAppointment
    {
        Task<Appointments> PostAppointment(Appointments appointment);
        Task<IEnumerable<Appointments>> GetAppointments();
        Task<List<Appointments>> DeleteAppointment(string id);

    }
}
