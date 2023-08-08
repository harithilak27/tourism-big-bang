using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace RoleBasedAuthorization.Models
{
    public class Appointments
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string? AppointmentId { get; set; }
        [ForeignKey(nameof(User))]
        public string? RegisteredrId { get; set; }
        public string MedicalService { get; set; } = string.Empty;
        public string Doctor { get; set; } = string.Empty;
        public string Date { get; set; } = string.Empty;
        public string Timing { get; set; } = string.Empty;
        
    }
}
