using RoleBasedAuthorization.Models;

namespace RoleBasedAuthorization.Repository.Interfaces
{
    public interface IDoctor
    {
        Task<Agency> PostDoctor(Agency doctor);
        Task<IEnumerable<Agency>> GetDoctors();

        Task<List<Agency>> DeleteDoctors(string id);
    }
}
