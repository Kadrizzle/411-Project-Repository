using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;

namespace _411Api.Models
{
    public class VapeMoneyStatistic
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public int MoneySpentOnVape { get; set; }
        public DateTime DateVapeWasBought { get; set; }
        public string? UserId { get; set; }
        //Commenting out reference to user class because I dont think we'll need it for our mongodb database
        //public User User { get; set; } = null!;
    }
}
