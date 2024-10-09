using _411Api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace _411Api.Services
{
    public interface IUserService
    {
        Task<UserResponseDto> RegisterAsync(UserDto userDto);
        Task<UserResponseDto> LoginAsync(UserDto userDto);
    }

    public class UserService : IUserService
    {
        private readonly IMongoCollection<User> _userCollection;

        public UserService(IOptions<_411DatabaseSettings> _411DatabaseSettings)
        {
            var mongoClient = new MongoClient(_411DatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(_411DatabaseSettings.Value.DatabaseName);
            _userCollection = mongoDatabase.GetCollection<User>(_411DatabaseSettings.Value.UserCollectionName);
        }

        public async Task<List<User>> GetAsync() =>
            await _userCollection.Find(_ => true).ToListAsync();

        public async Task<User?> GetAsync(string id) =>
            await _userCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(User newUser) =>
            await _userCollection.InsertOneAsync(newUser);

        public async Task UpdateAsync(string id, User updatedUser) =>
            await _userCollection.ReplaceOneAsync(x => x.Id == id, updatedUser);

        public async Task RemoveAsync(string id) =>
            await _userCollection.DeleteOneAsync(x => x.Id == id);

        public async Task<UserResponseDto> RegisterAsync(UserDto userDto)
        {
            var existingUser = await _userCollection.Find(u => u.UserName == userDto.Username).FirstOrDefaultAsync();
            if (existingUser != null) return null;

            var passwordHash = HashPassword(userDto.Password);
            var user = new User { UserName = userDto.Username, Password = passwordHash };
            await _userCollection.InsertOneAsync(user);
            return new UserResponseDto { Id = user.Id, Username = user.UserName, Token = GenerateToken(user) };
        }

        public async Task<UserResponseDto> LoginAsync(UserDto userDto)
        {
            var user = await _userCollection.Find(u => u.UserName == userDto.Username).FirstOrDefaultAsync();
            if (user == null || !VerifyPassword(userDto.Password, user.Password))
                return null;

            return new UserResponseDto { Id = user.Id, Username = user.UserName, Token = GenerateToken(user) };
        }

        private string HashPassword(string password)
        {
            byte[] salt = new byte[16];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }
            var hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(password, salt, KeyDerivationPrf.HMACSHA256, 10000, 32));
            return $"{Convert.ToBase64String(salt)}.{hashed}";
        }

        private bool VerifyPassword(string password, string storedHash)
        {
            var parts = storedHash.Split('.');
            var salt = Convert.FromBase64String(parts[0]);
            var hash = Convert.ToBase64String(KeyDerivation.Pbkdf2(password, salt, KeyDerivationPrf.HMACSHA256, 10000, 32));
            return hash == parts[1];
        }

        private string GenerateToken(User user)
        {
            // Implement JWT generation here
            return "your_jwt_token"; // placeholder
        }
    }
}
