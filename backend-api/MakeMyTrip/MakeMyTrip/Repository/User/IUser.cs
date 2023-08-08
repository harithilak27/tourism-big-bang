using MakeMyTrip.Models;
using MakeMyTrip.Models.TokenDto;
using Microsoft.AspNetCore.Mvc;

namespace MakeMyTrip.Repository.User
{
    public interface IUser
    {
        Task<IActionResult> AddUser(Admin_User userObj);
        Task<IActionResult> Authenticate(Admin_User userObj);
        Task<IActionResult> Refresh(GetToken getToken);
        Task<List<Admin_User>> Getallurs();
        Task<ActionResult<List<TravelAgent>>> DeleteTravelAgent(int id);




    }
}
