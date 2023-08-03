using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MakeMyTrip.Models
{
    public class Admin_User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? Id { get; set; }

        [Required]
        [RegularExpression(@"^[a-zA-Z]+$")]
        public string? Username { get; set; }

        [Required]
        [EmailAddress]
        public string? Email { get; set; }

        [Required]
        public string? Password { get; set; }
        public string? Token { get; set; }
        public string? Role { get; set; }

        [RegularExpression(@"^[0-9]+$")]
        public long? Phone { get; set; }

        [RegularExpression(@"^[a-zA-Z]+$")]
        public string? AgencyName { get; set; }

        public string? AgencyDescription { get; set; }

        [RegularExpression(@"^[0-9]+$")]
        public long? Aadharnumber { get; set; }
        public string? RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }

        public ICollection<AdminImageGallery>? AdminImages { get; set; } = new List<AdminImageGallery>();

        public ICollection<PackageOffering>? Packages { get; set; } = new List<PackageOffering>();
        public ICollection<Book>? Books { get; set; } = new List<Book>();



    }
}
