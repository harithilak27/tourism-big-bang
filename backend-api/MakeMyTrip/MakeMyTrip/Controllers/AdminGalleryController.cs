using MakeMyTrip.Data;
using MakeMyTrip.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MakeMyTrip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminGalleryController : ControllerBase
    {
        private readonly MakeTripContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;


        public AdminGalleryController(MakeTripContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            _hostEnvironment = hostEnvironment;
        }

        //to post images
        [HttpPost]
        public async Task<ActionResult<AdminImageGallery>> AddImages([FromForm] AdminImageGallery imageGallery)
        {
            imageGallery.ImageName = await SaveImage(imageGallery.ImageFile);
            _context.AdminImagecheck.Add(imageGallery);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        //to save image
        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images/AdminListGallery", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }

        //to get all images
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AdminImageGallery>>> GetAllImages()
        {
            return await _context.AdminImagecheck
                .Select(x => new AdminImageGallery()
                {
                    AdminImgsId = x.AdminImgsId,
                    LocationName = x.LocationName,
                    Locationdescription = x.Locationdescription,
                    ImageName = x.ImageName,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName)
                })
                .ToListAsync();
        }

        //to update the images with details
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdminImages(int id, [FromForm] AdminImageGallery imageGallery)
        {
            if (id != imageGallery.AdminImgsId)
            {
                return BadRequest();
            }

            if (imageGallery.ImageFile != null)
            {
                DeleteImage(imageGallery.ImageName);
                imageGallery.ImageName = await SaveImage(imageGallery.ImageFile);
            }

            _context.Entry(imageGallery).State = EntityState.Modified;

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
            return _context.AdminImagecheck.Any(e => e.AdminImgsId == id);
        }

        //to delete images
        [HttpDelete("{id}")]
        public async Task<ActionResult<AdminImageGallery>> DeleteImage(int id)
        {
            var imageGallery = await _context.AdminImagecheck.FindAsync(id);
            if (imageGallery == null)
            {
                return NotFound();
            }
            DeleteImage(imageGallery.ImageName);
            _context.AdminImagecheck.Remove(imageGallery);
            await _context.SaveChangesAsync();

            return imageGallery;
        }

        //delete image meathod
        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images/AdminListGallery", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);
        }



    }
}
