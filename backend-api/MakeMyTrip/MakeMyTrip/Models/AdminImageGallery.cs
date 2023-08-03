using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MakeMyTrip.Models
{
    public class AdminImageGallery
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AdminImgsId { get; set; }

        [Required]
        public string? LocationName { get; set; }

        [Required]
        public string? Locationdescription { get; set; }

        [Required]
        public string? ImageName { get; set; }

        [NotMapped]
        [Required(ErrorMessage = "Image File is required.")]
        public IFormFile? ImageFile { get; set; }

        [NotMapped]
        public string? ImageSrc { get; set; }
    }
}
