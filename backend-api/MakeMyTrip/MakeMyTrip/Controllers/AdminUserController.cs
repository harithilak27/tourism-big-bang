using MakeMyTrip.Models;
using MakeMyTrip.Models.TokenDto;
using MakeMyTrip.Repository.User;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MakeMyTrip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminUserController : ControllerBase
    {
        private readonly IUser _users;

        public AdminUserController(IUser users)
        {
            _users = users;
        }

        [HttpPost("register")]
        public async Task<IActionResult> AddUser([FromBody] Admin_User userObj)
        {
            try
            {
                return await _users.AddUser(userObj);
            }
            catch
            {
                // Return a generic error response to the client
                return StatusCode(500, new { Message = "An error occurred while adding a user. Please try again later." });
            }
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] Admin_User userObj)
        {
            try
            {
                return await _users.Authenticate(userObj);
            }
            catch 
            {
                // Return a generic error response to the client
                return StatusCode(500, new { Message = "An error occurred while authenticating the user. Please try again later." });
            }
        }


        [HttpPost("refresh")]
        public async Task<IActionResult> Refresh([FromBody] GetToken getToken)
        {
            try
            {
                return await _users.Refresh(getToken);
            }
            catch
            {
                // Return a generic error response to the client
                return StatusCode(500, new { Message = "An error occurred while refreshing the token. Please try again later." });
            }
        }

    }
}
