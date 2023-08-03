using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MakeMyTrip.Models
{
    public class Hotel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? HotelId { get; set; }

        [Required]
        public string? HotelName { get; set; }

        [Required]
        public string? HotelDescription { get; set; }

        [Required]
        public double? Ratings { get; set; }

        [Required]
        public int? PricePerPerson { get; set; }

        [Required]
        public int HotelRoomsAvailable { get; set; }

        [Required]
        public string? FoodType { get; set; }

        [Required]
        public string? HotelLocation { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string? ImageName { get; set; }

        [NotMapped]
        [Required(ErrorMessage = "Image file is required.")]
        [FileExtensions(Extensions = ".jpg,.jpeg,.png,.gif", ErrorMessage = "Invalid image format.")]
        public IFormFile? ImageFile { get; set; }

        [NotMapped]
        public string? ImageSrc { get; set; }
        public ICollection<PackageOffering>? PackageOfferings { get; set; } = new List<PackageOffering>();


    }
}
