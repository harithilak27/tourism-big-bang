using MakeMyTrip.Data;
using MakeMyTrip.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MakeMyTrip.Repository.UserBooking
{
    public class Booking : IBooking
    {
        private readonly MakeTripContext _context;
        public Booking(MakeTripContext context)
        {
            _context = context;
        }


        public async Task<ActionResult<List<Book>>> GetAllBookings()
        {
            var details = await _context.Books.ToListAsync();
            return details;

        }


        public async Task<ActionResult<List<Book>>> PostBookings(Book booking)
        {
            _context.Add(booking);
            await _context.SaveChangesAsync();
            return _context.Books.ToList();
        }
    }
}
