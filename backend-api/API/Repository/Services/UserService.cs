using JWTAuthenticationApp.Interfaces;
using JWTAuthenticationApp.Models.DTO;
using JWTAuthenticationApp.Models;
using System.Security.Cryptography;
using System.Text;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Data;
using Microsoft.EntityFrameworkCore;

namespace JWTAuthenticationApp.Services
{
    public class UserService
    {
        private RoleBasedAuthorizationDbContext _context;

        private IBaseRepo<string, User> _repo;
        private ITokenGenerate _tokenService;

        public UserService(IBaseRepo<string, User> repo, ITokenGenerate tokenGenerate,RoleBasedAuthorizationDbContext context)
        {
            _context = context;
            _repo = repo;
            _tokenService = tokenGenerate;
        }
        public UserDTO Login(UserDTO userDTO)
        {
            UserDTO user = null;
            var userData = _repo.Get(userDTO.userId);
            if (userData != null)
            {
                var hmac = new HMACSHA512(userData.HashKey);
                var userPass = hmac.ComputeHash(Encoding.UTF8.GetBytes(userDTO.Password));
                for (int i = 0; i < userPass.Length; i++)
                {
                    if (userPass[i] != userData.Password[i])
                        return null;
                }
                user = new UserDTO();
                user.userId = userData.UserId;
                user.Role = userData.Role;
                user.Token = _tokenService.GenerateToken(user);
            }
            return user;
        }
        public UserDTO Register(UserRegisterDTO userDTO)
        {
            UserDTO user = null;
            var hmac = new HMACSHA512();
            userDTO.Password = hmac.ComputeHash(Encoding.UTF8.GetBytes(userDTO.PasswordClear));
            userDTO.HashKey = hmac.Key;
            var resultUser = _repo.Add(userDTO);
            if (resultUser != null)
            {
                user = new UserDTO();
                user.userId = resultUser.UserId;
                user.Email=resultUser.Email;
                user.Role = resultUser.Role;
                user.Token = _tokenService.GenerateToken(user);
            }
            return user;
        }

        public async Task<List<User>> DeleteUser(string id)
        {
            var staff = await _context.Users.FirstOrDefaultAsync(s => s.UserId == id);
            if (staff == null)
            {
                return null;
            }
            _context.Users.Remove(staff);
            await _context.SaveChangesAsync();
            return await _context.Users.ToListAsync();
        }
    }
}
