using _411Api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace _411Api.Services
{
    public class VapeHitStatisticsService
    {
        private readonly IMongoCollection<VapeHitStatistic> _vapeHitStatisticCollection;

        public VapeHitStatisticsService(
            IOptions<_411DatabaseSettings> _411DatabaseSettings)
        {
            var mongoClient = new MongoClient(
                _411DatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                _411DatabaseSettings.Value.DatabaseName);

            _vapeHitStatisticCollection = mongoDatabase.GetCollection<VapeHitStatistic>(_411DatabaseSettings.Value.VapeHitStatisticCollectionName);
        }

        public async Task<List<VapeHitStatistic>> GetAsync() =>
            await _vapeHitStatisticCollection.Find(_ => true).ToListAsync();

        public async Task<VapeHitStatistic?> GetAsync(string id) =>
            await _vapeHitStatisticCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(VapeHitStatistic newVapeHitStatistic) =>
            await _vapeHitStatisticCollection.InsertOneAsync(newVapeHitStatistic);

        public async Task UpdateAsync(string id, VapeHitStatistic updatedVapeHitStatistic) =>
            await _vapeHitStatisticCollection.ReplaceOneAsync(x => x.Id == id, updatedVapeHitStatistic);

        public async Task RemoveAsync(string id) =>
            await _vapeHitStatisticCollection.DeleteOneAsync(x => x.Id == id);
    }
}

