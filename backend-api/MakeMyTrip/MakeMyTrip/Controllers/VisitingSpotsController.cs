using MakeMyTrip.Data;
using MakeMyTrip.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MakeMyTrip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VisitingSpotsController : ControllerBase
    {
        private readonly MakeTripContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;


        public VisitingSpotsController(MakeTripContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            _hostEnvironment = hostEnvironment;
        }

        //to post images
        [HttpPost]
        public async Task<ActionResult<Spot>> AddSpot([FromForm] Spot allSpot)
        {
            allSpot.ImageName = await SaveImage(allSpot.ImageFile);
            _context.Spot.Add(allSpot);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        //to save image
        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images/SpotDetails", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }

        //to get all images
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Spot>>> GetAllDetailSpots()
        {
            return await _context.Spot
                .Select(x => new Spot()
                {
                    SpotId = x.SpotId,
                    SpotLocation = x.SpotLocation,
                    SpecialtyId = x.SpecialtyId,
                    ImageName = x.ImageName,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/SpotDetails/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName)
                })
                .ToListAsync();
        }

        /*[HttpGet]
        public ActionResult<IEnumerable<AdminImageGallery>> GetAllImages()
        {
            string imageFolderPath = Path.Combine(_hostEnvironment.ContentRootPath, "Images/Samplecheck");
            string[] imageFiles = Directory.GetFiles(imageFolderPath);

            var imageList = imageFiles.Select(imageFilePath =>
            {
                var imageName = Path.GetFileName(imageFilePath);
                return new AdminImageGallery()
                {
                    AdminImgsId = 0, // You may want to set this based on your requirements
                    LocationName = "", // You may want to set this based on your requirements
                    Locationdescription = "", // You may want to set this based on your requirements
                    ImageName = imageName,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/Samplecheck/{3}", Request.Scheme, Request.Host, Request.PathBase, imageName)
                };
            });

            return imageList.ToList();
        }*/

        //to update the images with details
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSpotDetails(int id, [FromForm] Spot spothtl)
        {
            if (id != spothtl.SpotId)
            {
                return BadRequest();
            }

            if (spothtl.ImageFile != null)
            {
                DeleteImage(spothtl.ImageName);
                spothtl.ImageName = await SaveImage(spothtl.ImageFile);
            }

            _context.Entry(spothtl).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ImageExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        //to check catch error meathod
        private bool ImageExists(int id)
        {
            return _context.Spot.Any(e => e.SpotId == id);
        }

        //to delete images
        [HttpDelete("{id}")]
        public async Task<ActionResult<Spot>> DeleteSpotDetail(int id)
        {
            var spotdtls = await _context.Spot.FindAsync(id);
            if (spotdtls == null)
            {
                return NotFound();
            }
            DeleteImage(spotdtls.ImageName);
            _context.Spot.Remove(spotdtls);
            await _context.SaveChangesAsync();

            return spotdtls;
        }

        //delete image meathod
        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images/SpotDetails", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);
        }
    }
}
