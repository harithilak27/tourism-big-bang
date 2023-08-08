using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace RoleBasedAuthorization.Models
{
    public class Doctors
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string? userId { get; set; }
        public string? Email { get; set; }
        public string? PasswordClear { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Gender { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string Specification { get; set; } = string.Empty;
        public string Experience { get; set; } = string.Empty;
    }
}
