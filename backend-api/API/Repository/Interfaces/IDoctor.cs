using RoleBasedAuthorization.Models;

namespace RoleBasedAuthorization.Repository.Interfaces
{
    public interface IDoctor
    {
        Task<Doctors> PostDoctor(Doctors doctor);
        Task<IEnumerable<Doctors>> GetDoctors();

        Task<List<Doctors>> DeleteDoctors(string id);
    }
}
