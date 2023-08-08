using MakeMyTrip.Models;
using Microsoft.AspNetCore.Mvc;

namespace MakeMyTrip.Repository.AgentRegister
{
    public interface IAgents
    {
        Task<ActionResult> AddAgent(TravelAgent trvlagnt);
        Task<ActionResult<List<TravelAgent>>> GetAllTravelAgentRequest();

    }
}
