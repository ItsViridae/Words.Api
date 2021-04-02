using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Words.Api.Data;
using Words.Api.Data.Dtos;
using Words.Api.Data.Dtos.User;
using Words.Api.Data.Entities;

namespace Words.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly WordsDataContext context;
        public UserController(WordsDataContext _context)
        {
            _context = context;
        }

        //GetAll
        //Attributes
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            var listOfUsers = context.Set<User>().ToList();
            if (listOfUsers == null)
            {
                return BadRequest();
            }
            return listOfUsers;
        }

        //GetById
        [HttpGet("{id}")]
        public async Task<ActionResult<UserDto>> GetUser(int id)
        {
            //var user = context.Set<User>().Find(id);
            var user = await context.Set<User>().Where(x => x.Id == id).FirstOrDefaultAsync();
            if(user == null)
            {
                return BadRequest();
            }

            var userdto = new UserDto
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email
            };

            return userdto;
        }

        //Post
        [HttpPost]
        public async Task<ActionResult<UserDto>> CreateUser(CreateUserDto dto)
        {
            //add to the database
            var user = new User
            {
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Email = dto.Email,
                Username = dto.Username,
                Password = dto.Password
            };

            context.Add(user);
            await context.SaveChangesAsync();

            var entity = context.Set<User>().Where(x => x.Username == dto.Username).FirstOrDefault();
            if (entity == null)
            {
                return BadRequest();
            }

            var userDto = new UserDto
            {
                FirstName = entity.FirstName,
                LastName = entity.LastName,
                Email = entity.Email,
                // we dont want to return Passwords or Usernames or Id's
            };

            return Ok(userDto);
        }

        //Edit - Put
        [HttpPut]
        public async Task<ActionResult<UserDto>> EditUser(EditUserDto dto)
        {
            var user = await context.Set<User>().FindAsync(dto.Id);
            if (user == null)
            {
                return BadRequest();
            }

            user.FirstName = dto.FirstName;
            user.LastName = dto.LastName;
            user.Email = dto.Email;
            user.Username = dto.Username;
            user.Password = dto.Password;

            context.Set<User>().Update(user);
            await context.SaveChangesAsync();

            var newEntity = await context.Set<User>().FindAsync(dto.Id);
            if (newEntity == null)
            {
                return BadRequest();
            }

            var userDto = new UserDto
            {
                FirstName = newEntity.FirstName,
                LastName = newEntity.LastName,
                Email = newEntity.Email
            };

            return Ok(userDto);
        }

        //Delete
        [HttpDelete]
        public async Task<ActionResult<OkResult>> DeleteUser(int id)
        {
            var userToDelete = await context.Set<User>().FindAsync(id);
            if (userToDelete == null)
            {
                return BadRequest();
            }

            context.Set<User>().Remove(userToDelete);
            await context.SaveChangesAsync();

            return Ok();
        }
    }
}