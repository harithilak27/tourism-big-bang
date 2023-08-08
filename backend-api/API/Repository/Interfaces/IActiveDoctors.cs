using RoleBasedAuthorization.Models;

namespace RoleBasedAuthorization.Repository.Interfaces
{
    public interface IActiveDoctors
    {
        Task<ActiveAgencies> PostActiveDoctor(ActiveAgencies activedoctors);
        Task<IEnumerable<ActiveAgencies>> GetActiveDoctors();
        Task<List<ActiveAgencies>> DeleteActiveDoctors(string id);
    }
}
