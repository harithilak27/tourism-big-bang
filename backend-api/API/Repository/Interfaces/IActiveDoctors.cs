using RoleBasedAuthorization.Models;

namespace RoleBasedAuthorization.Repository.Interfaces
{
    public interface IActiveDoctors
    {
        Task<ActiveDoctors> PostActiveDoctor(ActiveDoctors activedoctors);
        Task<IEnumerable<ActiveDoctors>> GetActiveDoctors();
        Task<List<ActiveDoctors>> DeleteActiveDoctors(string id);
    }
}
