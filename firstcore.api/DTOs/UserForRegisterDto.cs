using System.ComponentModel.DataAnnotations;

namespace firstcore.api.DTOs
{
    public class UserForRegisterDto
    {
        [Required]
        public string username { get; set; }    
        [StringLength(8,MinimumLength=4,ErrorMessage="You must specify password between 4 and 8 characters.")]
        public string password { get; set; }
    }
}