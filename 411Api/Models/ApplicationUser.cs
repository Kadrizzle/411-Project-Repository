using AspNetCore.Identity.MongoDbCore.Models;

namespace _411Api.Models
{
    public class ApplicationUser : MongoIdentityUser<Guid>
    {
        public string FullName { get; set; } = string.Empty;
    }
}
