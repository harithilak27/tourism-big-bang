using JWTAuthenticationApp.Models.DTO;

namespace JWTAuthenticationApp.Interfaces
{
    public interface ITokenGenerate
    {
        public string GenerateToken(UserDTO user);
    }
}
