using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MakeMyTrip.Models
{
    public class Feedback
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int FeedbackId { get; set; }

        [Required]
        [RegularExpression(@"^[a-zA-Z]+$")]
        public string? GuestName { get; set; }

        [Required]
        [EmailAddress]
        public string? GuestEmail { get; set; }
        public string? Subject { get; set; }
        public string? Content { get; set; }
    }
}
