using MakeMyTrip.Models;
using MakeMyTrip.Repository.UserBooking;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace MakeMyTrip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserBookController : ControllerBase
    {
        private readonly IBooking _context;
        public UserBookController(IBooking context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Book>>> GetAllBookings()
        {
            try
            {
                return await _context.GetAllBookings();
                Log.Information("All Bookings");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost]
        public async Task<ActionResult<List<Book>>> PostBookings(Book booking)
        {
            try
            {
                return await _context.PostBookings(booking);
                Log.Information("Posting Bookings :{booking}", booking);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
