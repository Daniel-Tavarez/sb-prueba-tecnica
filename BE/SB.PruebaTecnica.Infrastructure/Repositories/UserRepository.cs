using SB.PruebaTecnica.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SB.PruebaTecnica.Infrastructure.Repositories
{
    public class UserRepository
    {
        private readonly string _filePath;

        public UserRepository()
        {
            _filePath = Path.Combine(Directory.GetCurrentDirectory(), "data", "usuarios.txt");
            if (!File.Exists(_filePath))
            {
                throw new FileNotFoundException("El archivo de usuarios no se encontró.");
            }
        }

        public User GetUserByUsername(string username)
        {
            var users = File.ReadAllLines(_filePath);

            foreach (var user in users)
            {
                var credentials = user.Split(':');
                if (credentials.Length == 2)
                {
                    var storedUsername = credentials[0].Trim();
                    if (storedUsername == username)
                    {
                        return new User { Username = storedUsername, Password = credentials[1].Trim() };
                    }
                }
            }

            return null;
        }

        public bool ValidateUser(string username, string password)
        {
            var user = GetUserByUsername(username);
            return user != null && user.Password == password;
        }

        public IEnumerable<User> GetAllUsers()
        {
            var users = File.ReadAllLines(_filePath);
            var userList = new List<User>();

            foreach (var user in users)
            {
                var credentials = user.Split(':');
                if (credentials.Length == 2)
                {
                    userList.Add(new User { Username = credentials[0].Trim(), Password = credentials[1].Trim() });
                }
            }

            return userList;
        }
    }

}
