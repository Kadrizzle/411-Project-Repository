
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace _411Api.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? UserName { get; set; }
        public string? Password { get; set; }
        public List<Vape>? Vapes { get; set; } = [];
        public ICollection<VapeHitStatistic> VapeHitStatistic { get; } = new List<VapeHitStatistic>();
        public ICollection<VapeMoneyStatistic> VapeMoneyStatistic { get; } = new List<VapeMoneyStatistic>();
    }
}
