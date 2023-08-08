using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MakeMyTrip.Models
{
    public class TravelAgent
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string? Username { get; set; }

        [Required]
        [EmailAddress]
        public string? Email { get; set; }

        [Required]
        public string? Password { get; set; }

        [Required(ErrorMessage = "Aadhar number is required.")]
        [RegularExpression(@"^\d{4}\s\d{4}\s\d{4}$", ErrorMessage = "Invalid Aadhar number format.")]
        public string? Aadharnumber { get; set; }

        public string? Role { get; set; }
        public long? Phone { get; set; }

        [Required]
        public string? AgencyName { get; set; }

        [Required]
        public string? AgencyDescription {get; set; }

    }
}
