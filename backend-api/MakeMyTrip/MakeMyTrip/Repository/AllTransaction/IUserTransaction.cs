using MakeMyTrip.Models;
using Microsoft.AspNetCore.Mvc;

namespace MakeMyTrip.Repository.AllTransaction
{
    public interface IUserTransaction
    {
        Task<ActionResult<List<Transaction>>> GetAllTransaction();
        Task<ActionResult<List<Transaction>>> PostTransaction(Transaction transaction);
    }
}
