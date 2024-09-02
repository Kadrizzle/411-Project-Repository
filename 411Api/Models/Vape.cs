using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace _411Api.Models
{
    public class Vape
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("Name")]
        public string Name { get; set; } = null!;
        public string CompanyName { get; set; } = null!;
        public string NicotineConcentration { get; set; } = null!;
    }
}
