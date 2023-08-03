using MakeMyTrip.Data;
using MakeMyTrip.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MakeMyTrip.Repository.Feedbacks
{
    public class FeedbackService : IFeedback
    {
        private readonly MakeTripContext _context;
        public FeedbackService(MakeTripContext context)
        {
            _context = context;
        }


        public async Task<ActionResult<List<Feedback>>> GetAllFeedback()
        {
            var details = await _context.Feedbacks.ToListAsync();
            return details;
        }


        public async Task<ActionResult<List<Feedback>>> PostFeedback(Feedback feedback)
        {
            _context.Add(feedback);
            await _context.SaveChangesAsync();
            return await _context.Feedbacks.ToListAsync();
        }
    }
}
