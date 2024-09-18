using _411Api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace _411Api.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _userCollection;
        private readonly IMongoCollection<UserDto> _userDtoCollection;


        public UserService(
            IOptions<_411DatabaseSettings> _411DatabaseSettings)
        {
            var mongoClient = new MongoClient(
                _411DatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                _411DatabaseSettings.Value.DatabaseName);

            _userCollection = mongoDatabase.GetCollection<User>(_411DatabaseSettings.Value.UserCollectionName);

            _userDtoCollection = mongoDatabase.GetCollection<UserDto>(_411DatabaseSettings.Value.UserDtoCollectionName);

        }

        //The GET and GETALL are pulling from UserDto so we can protect user passwords
        public async Task<List<UserDto>> GetAsync() =>
            await _userDtoCollection.Find(_ => true).ToListAsync();

        public async Task<UserDto?> GetAsync(string id) =>
            await _userDtoCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsyncForUser(User newUser) =>
            await _userCollection.InsertOneAsync(newUser);

        public async Task CreateAsyncForUserDto(UserDto newUserDto) =>
            await _userDtoCollection.InsertOneAsync(newUserDto);


        public async Task UpdateAsync(string id, UserDto updatedUser) =>
            await _userCollection.ReplaceOneAsync(x => x.Id == id, updatedUser);

        public async Task RemoveAsync(string id) =>
            await _userCollection.DeleteOneAsync(x => x.Id == id);
    }
}
