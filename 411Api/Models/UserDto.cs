using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace _411Api.Models
{
    public class UserDto
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? UserName { get; set; }
        public List<Vape>? Vapes { get; set; } = [];
        public ICollection<VapeHitStatistic> VapeHitStatistic { get; } = new List<VapeHitStatistic>();
        public ICollection<VapeMoneyStatistic> VapeMoneyStatistic { get; } = new List<VapeMoneyStatistic>();
    }
}
