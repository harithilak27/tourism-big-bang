namespace MakeMyTrip.Models.TokenDto
{
    public class GetToken
    {
        public string AccessToken { get; set; } = string.Empty;
        public string RefreshToken { get; set; } = string.Empty;
        public string? Role { get; set; }
    }
}
