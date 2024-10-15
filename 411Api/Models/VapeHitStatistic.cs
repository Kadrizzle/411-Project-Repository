using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace _411Api.Models
{
    public class VapeHitStatistic
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public int VapeHit { get; set; }
        public DateTime DateVapeWasHit { get; set; }
        public string? UserId { get; set; }
        public User User { get; set; } = null!;
    }
}
