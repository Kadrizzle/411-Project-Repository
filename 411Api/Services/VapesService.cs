using _411Api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;


namespace _411Api.Services
{
    public class VapesService
    {
        private readonly IMongoCollection<Vape> _vapesCollection;

        public VapesService(
            IOptions<_411DatabaseSettings> _411DatabaseSettings)
        {
            var mongoClient = new MongoClient(
                _411DatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                _411DatabaseSettings.Value.DatabaseName);

            _vapesCollection = mongoDatabase.GetCollection<Vape>(
                _411DatabaseSettings.Value.VapesCollectionName);
        }

        public async Task<List<Vape>> GetAsync() =>
            await _vapesCollection.Find(_ => true).ToListAsync();

        public async Task<Vape?> GetAsync(string id) =>
            await _vapesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Vape newVape) =>
            await _vapesCollection.InsertOneAsync(newVape);

        public async Task UpdateAsync(string id, Vape updatedVape) =>
            await _vapesCollection.ReplaceOneAsync(x => x.Id == id, updatedVape);

        public async Task RemoveAsync(string id) =>
            await _vapesCollection.DeleteOneAsync(x => x.Id == id);
    }
}
