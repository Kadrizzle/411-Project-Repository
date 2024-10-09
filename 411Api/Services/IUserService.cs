using System.Threading.Tasks;

public interface IUserService
{
    Task<UserResponseDto> RegisterAsync(UserDto userDto);
    Task<UserResponseDto> LoginAsync(UserDto userDto);
}
