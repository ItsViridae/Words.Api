using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Words.Api.Data;
using Words.Api.Data.Dtos;
using Words.Api.Data.Entities;

namespace Words.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly WordsDataContext _context;

        public PeopleController(WordsDataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Person>>> GetAllPeople()
        {
            return await _context.Set<Person>().ToListAsync();
        }

        [HttpPost]
        public ActionResult<Person> GetAllPeople(CreatePersonDto dto)
        {
            var addPerson = new Person
            {
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Age = dto.Age
            };

            _context.Set<Person>().Add(addPerson);
            _context.SaveChanges();

            return Created($"/api/Person/the-id", addPerson);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Person>> EditPerson(int id, CreatePersonDto dto)
        {
            var personToEdit = _context.Set<Person>().Find(id);

            personToEdit.Age = dto.Age;
            personToEdit.FirstName = dto.FirstName;
            personToEdit.LastName = dto.LastName;

            await _context.SaveChangesAsync();

            return Ok(personToEdit);
        }
    }
}