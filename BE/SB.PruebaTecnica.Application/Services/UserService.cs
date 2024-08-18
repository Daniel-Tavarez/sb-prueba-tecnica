using SB.PruebaTecnica.Application.Interfaces;
using SB.PruebaTecnica.Domain.Entities;
using SB.PruebaTecnica.Infrastructure.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SB.PruebaTecnica.Application.Services
{
    public class UserService : IUserService
    {
        private readonly UserRepository _userRepository;

        public UserService(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public User AuthenticateUser(string username, string password)
        {
            if (_userRepository.ValidateUser(username, password))
            {
                return _userRepository.GetUserByUsername(username);
            }

            return null;
        }

        public IEnumerable<User> GetAllUsers()
        {
            return _userRepository.GetAllUsers();
        }
    }

}
