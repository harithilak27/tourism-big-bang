using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Repository.Interfaces;

namespace RoleBasedAuthorization.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AngularCORS")]
    public class DoctorController : Controller
    {
        private readonly IDoctor _context;
        
        public DoctorController(IDoctor context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<ActionResult<Doctors>> PostDoctor(Doctors doctors)
        {
            try
            {
                var item = await _context.PostDoctor(doctors);
                return Ok(item);
            }
            catch (Exception err)
            {
                return BadRequest(err.Message);
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Doctors>>> GetDoctors()
        {
            try
            {
                var ht = await _context.GetDoctors();
                return Ok(ht);
            }
            catch (Exception er)
            {
                return BadRequest(er.Message);
            }
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Doctors>>> DeleteDoctors(string id)
        {
            var staff = await _context.DeleteDoctors(id);

            if (staff == null)
            {
                return NotFound("Staff id not matching");
            }
            return Ok(staff);
        }
    }
}
