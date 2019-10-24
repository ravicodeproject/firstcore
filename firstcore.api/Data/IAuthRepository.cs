using System.Threading.Tasks;
using firstcore.api.Models;

namespace firstcore.api.Data
{
    public interface IAuthRepository
    {
         Task<User> Register (User user,string password);         
         Task<User> Login(string username, string password);
         Task<bool> UserExists(string username);
    }
}