using MakeMyTrip.Models;
using Microsoft.AspNetCore.Mvc;

namespace MakeMyTrip.Repository.Feedbacks
{
    public interface IFeedback
    {
        Task<ActionResult<List<Feedback>>> GetAllFeedback();
        Task<ActionResult<List<Feedback>>> PostFeedback(Feedback feedback);
    }
}
