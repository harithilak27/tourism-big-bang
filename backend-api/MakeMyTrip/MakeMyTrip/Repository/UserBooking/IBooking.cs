using MakeMyTrip.Models;
using Microsoft.AspNetCore.Mvc;

namespace MakeMyTrip.Repository.UserBooking
{
    public interface IBooking
    {
        Task<ActionResult<List<Book>>> GetAllBookings();
        Task<ActionResult<List<Book>>> PostBookings(Book booking);
    }
}
