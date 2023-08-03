using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MakeMyTrip.Models
{
    public class Transaction
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? TranactionId { get; set; }

        [ForeignKey("Book")]
        public int? BookId { get; set; }
        public double? Totalamount { get; set; }
        public bool? Status { get; set; }



    }
}
