using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace _411Api.Models
{
    public class UserVape
    {
        public int UserId { get; set; }
        public int VapeId { get; set; }
    }
}
