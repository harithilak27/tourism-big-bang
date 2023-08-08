using MakeMyTrip.Data;
using MakeMyTrip.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MakeMyTrip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpecialPlaceController : ControllerBase
    {
        private readonly MakeTripContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;


        public SpecialPlaceController(MakeTripContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            _hostEnvironment = hostEnvironment;
        }

        //to post images
        [HttpPost]
        public async Task<ActionResult<Specialty>> AddSpecialPlace([FromForm] Specialty allPlaces)
        {
            allPlaces.ImageName = await SaveImage(allPlaces.ImageFile);
            _context.Specialty.Add(allPlaces);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        //to save image
        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images/PlaceDetails", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }

        //to get all images
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Specialty>>> GetAllDetailPlaces()
        {
            return await _context.Specialty
                .Select(x => new Specialty()
                {
                    SpecialtyId = x.SpecialtyId,
                    SpecialtyLocation = x.SpecialtyLocation,
                    WhatSpecial = x.WhatSpecial,
                    ImageName = x.ImageName,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/PlaceDetails/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName)
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
        public async Task<IActionResult> PutPlaceDetails(int id, [FromForm] Specialty updatePlace)
        {
            if (id != updatePlace.SpecialtyId)
            {
                return BadRequest();
            }

            if (updatePlace.ImageFile != null)
            {
                DeleteImage(updatePlace.ImageName);
                updatePlace.ImageName = await SaveImage(updatePlace.ImageFile);
            }

            _context.Entry(updatePlace).State = EntityState.Modified;

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
            return _context.Specialty.Any(e => e.SpecialtyId == id);
        }

        //to delete images
        [HttpDelete("{id}")]
        public async Task<ActionResult<Specialty>> DeletePlaceDetail(int id)
        {
            var placedetail = await _context.Specialty.FindAsync(id);
            if (placedetail == null)
            {
                return NotFound();
            }
            DeleteImage(placedetail.ImageName);
            _context.Specialty.Remove(placedetail);
            await _context.SaveChangesAsync();

            return placedetail;
        }

        //delete image meathod
        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images/PlaceDetails", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);
        }
    }
}
