using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MakeMyTrip.Models
{
    public class Specialty
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? SpecialtyId { get; set; }

        [Required]
        public string? SpecialtyLocation { get; set; }
        public string? WhatSpecial { get; set; }
        public string? ImageName { get; set; }

        [NotMapped]
        public IFormFile? ImageFile { get; set; }

        [NotMapped]
        public string? ImageSrc { get; set; }
        public ICollection<PackageOffering>? PackageOfferings { get; set; }
        public ICollection<Spot>? Spots { get; set; } 

    }
}
