using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SB.PruebaTecnica.Application.Interfaces;
using SB.PruebaTecnica.Domain.Models;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SB.PruebaTecnica.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IUserService _userService;

        public AuthController(IConfiguration configuration, IUserService userService)
        {
            _configuration = configuration;
            _userService = userService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            var user = _userService.AuthenticateUser(request.Username, request.Password);

            if (user == null)
            {
                return Unauthorized("Usuario o contraseña incorrectos.");
            }

            var token = GenerateJwtToken(user.Username);
            return Ok(new { Token = token });
        }

        private string GenerateJwtToken(string username)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, username),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));
            var stringKey = _configuration.GetSection("AppSettings:Token").Value;
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: cred
            );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }
    }
}
