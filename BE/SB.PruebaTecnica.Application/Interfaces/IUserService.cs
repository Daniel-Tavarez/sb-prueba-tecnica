using SB.PruebaTecnica.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SB.PruebaTecnica.Application.Interfaces
{
    public interface IUserService
    {
        User AuthenticateUser(string username, string password);
        IEnumerable<User> GetAllUsers();
    }
}
