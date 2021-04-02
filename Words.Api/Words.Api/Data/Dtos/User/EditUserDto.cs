using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Words.Api.Data.Dtos.User
{
    public class EditUserDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Username { get; set; } //byte[]
        public string Password { get; set; } //byte[]
    }
}
