using MakeMyTrip.Data;
using MakeMyTrip.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MakeMyTrip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelController : ControllerBase
    {
        private readonly MakeTripContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;


        public HotelController(MakeTripContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            _hostEnvironment = hostEnvironment;
        }

        //to post images
        [HttpPost]
        public async Task<ActionResult<Hotel>> AddHotel([FromForm] Hotel allhotel)
        {
            allhotel.ImageName = await SaveImage(allhotel.ImageFile);
            _context.Hotel.Add(allhotel);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        //to save image
        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images/HotelDetails", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }

        //to get all images
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hotel>>> GetAllDetailhotel()
        {
            return await _context.Hotel
                .Select(x => new Hotel()
                {
                    HotelId = x.HotelId,
                    HotelName = x.HotelName,
                    HotelDescription = x.HotelDescription,
                    Ratings = x.Ratings,
                    PricePerPerson = x.PricePerPerson,
                    HotelRoomsAvailable = x.HotelRoomsAvailable,
                    FoodType = x.FoodType,
                    HotelLocation = x.HotelLocation,
                    ImageName = x.ImageName,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/HotelDetails/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName)
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
        public async Task<IActionResult> PutHotelDetails(int id, [FromForm] Hotel updatehtl)
        {
            if (id != updatehtl.HotelId)
            {
                return BadRequest();
            }

            if (updatehtl.ImageFile != null)
            {
                DeleteImage(updatehtl.ImageName);
                updatehtl.ImageName = await SaveImage(updatehtl.ImageFile);
            }

            _context.Entry(updatehtl).State = EntityState.Modified;

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
            return _context.Hotel.Any(e => e.HotelId == id);
        }

        //to delete images
        [HttpDelete("{id}")]
        public async Task<ActionResult<Hotel>> DeleteHotelDetail(int id)
        {
            var Hotldetail = await _context.Hotel.FindAsync(id);
            if (Hotldetail == null)
            {
                return NotFound();
            }
            DeleteImage(Hotldetail.ImageName);
            _context.Hotel.Remove(Hotldetail);
            await _context.SaveChangesAsync();

            return Hotldetail;
        }

        //delete image meathod
        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images/HotelDetails", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);
        }
    }
}
