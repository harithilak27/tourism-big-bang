using MakeMyTrip.Models;
using MakeMyTrip.Repository.Packages;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MakeMyTrip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PackageOfferingController : ControllerBase
    {
        private readonly IAllPack _context;
        public PackageOfferingController(IAllPack context)
        {
            _context = context;
        }



        [HttpGet]
        public async Task<ActionResult<List<PackageOffering>>> GetAllPackages()
        {
            try
            {
                return await _context.GetAllPackages();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost]
        public async Task<ActionResult<List<PackageOffering>>> PostPackages(PackageOffering package)
        {
            try
            {
                return await _context.PostPackages(package);
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
