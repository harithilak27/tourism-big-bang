using MakeMyTrip.Models;
using MakeMyTrip.Repository.AllTransaction;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MakeMyTrip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AllTransactionController : ControllerBase
    {
        private readonly IUserTransaction _context;
        public AllTransactionController(IUserTransaction context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<Transaction>>> GetAllTransaction()
        {
            try
            {
                return await _context.GetAllTransaction();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost]
        public async Task<ActionResult<List<Transaction>>> PostTransaction(Transaction transaction)
        {
            try
            {
                return await _context.PostTransaction(transaction);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
