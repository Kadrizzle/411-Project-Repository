using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IUserService _userService;

    public AuthController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost("register")]
    public async Task<ActionResult<UserResponseDto>> Register(UserDto userDto)
    {
        var result = await _userService.RegisterAsync(userDto);
        if (result == null)
            return BadRequest("User already exists.");

        return Ok(result);
    }

    [HttpPost("login")]
    public async Task<ActionResult<UserResponseDto>> Login(UserDto userDto)
    {
        var result = await _userService.LoginAsync(userDto);
        if (result == null)
            return Unauthorized("Invalid credentials.");

        return Ok(result);
    }
}
