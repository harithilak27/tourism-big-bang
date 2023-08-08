using MakeMyTrip.Data;
using MakeMyTrip.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MakeMyTrip.Repository.AllTransaction
{
    public class UserTransactionService : IUserTransaction
    {
        private readonly MakeTripContext _context;
        public UserTransactionService(MakeTripContext context)
        {
            _context = context;
        }


        public async Task<ActionResult<List<Transaction>>> GetAllTransaction()
        {
            var details = await _context.Transaction.ToListAsync();
            return details;
        }


        public async Task<ActionResult<List<Transaction>>> PostTransaction(Transaction transaction)
        {
            _context.Add(transaction);
            await _context.SaveChangesAsync();
            return await _context.Transaction.ToListAsync();
        }
    }
}
