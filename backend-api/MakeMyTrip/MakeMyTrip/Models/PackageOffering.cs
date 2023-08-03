using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MakeMyTrip.Models
{
    public class PackageOffering
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? PackageID { get; set; }

        [ForeignKey("Admin_User")]
        public int? Id { get; set; }

        [Required]
        public string? OfferType { get; set; }

        [Required]
        public string? OfferDesc { get; set; }

        [Required]
        public string? In_Out_India { get; set; }
    

        [Required]
        public string? PricePerPerson { get; set; }

        [Required]
        public string? Destination { get; set; }

        [Required]
        public string? VehicleType { get; set; }

        [Required]
        public string? Location { get; set; }

        public int? Days { get; set; }
        public int? Nights { get; set; }
        public int? Totaldays { get; set; }
        public string? ItineraryDetails { get; set; }

        [ForeignKey("Specialty")]
        public int? SpecialtyId { get; set; }

        [ForeignKey("Hotel")]
        public int? HotelId { get; set; }
        public ICollection<Book>? Booking { get; set; } = new List<Book>();

    }
}
