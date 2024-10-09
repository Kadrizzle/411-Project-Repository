using _411Api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace _411Api.Services
{
    public class VapeMoneyStatisticsService
    {
        private readonly IMongoCollection<VapeMoneyStatistic> _vapeMoneyStatisticCollection;


        public VapeMoneyStatisticsService(
            IOptions<_411DatabaseSettings> _411DatabaseSettings)
        {
            var mongoClient = new MongoClient(
                _411DatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                _411DatabaseSettings.Value.DatabaseName);

            _vapeMoneyStatisticCollection = mongoDatabase.GetCollection<VapeMoneyStatistic>(_411DatabaseSettings.Value.VapeMoneyStatisticCollectionName);
        }

        public async Task<List<VapeMoneyStatistic>> GetAsync() =>
            await _vapeMoneyStatisticCollection.Find(_ => true).ToListAsync();

        public async Task<VapeMoneyStatistic?> GetAsync(string id) =>
            await _vapeMoneyStatisticCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(VapeMoneyStatistic newVapeMoneyStatistic) =>
            await _vapeMoneyStatisticCollection.InsertOneAsync(newVapeMoneyStatistic);

        public async Task UpdateAsync(string id, VapeMoneyStatistic updatedVapeMoneyStatistic) =>
            await _vapeMoneyStatisticCollection.ReplaceOneAsync(x => x.Id == id, updatedVapeMoneyStatistic);

        public async Task RemoveAsync(string id) =>
            await _vapeMoneyStatisticCollection.DeleteOneAsync(x => x.Id == id);
    }
}
