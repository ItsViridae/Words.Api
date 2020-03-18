using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProgrammingInterviewPrograms;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Words.Api.Data;
using Words.Api.Data.Dtos;
using Words.Api.Data.Entities;
using System.Reflection;
using System.Diagnostics;

namespace Words.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProblemsController : ControllerBase
    {
        private readonly WordsDataContext _context;
        private readonly IProblemService _problemService;

        public ProblemsController(WordsDataContext context, IProblemService problemService)
        {
            _context = context;
            _problemService = problemService;
        }

        // Gets All Functions
        [HttpGet]
        public async Task<ActionResult<List<Problem>>> GetAllProblems()
        {
            return await _context.Set<Problem>().ToListAsync();
        }

        // Gets detail
        [HttpPost]
        public async Task<ActionResult<Problem>> GetDetails(CreateProblemDto dto)
        {
            var ProblemServiceDetails = "ProblemService Details logging: ";
            var type = _problemService.GetType();
            var results = Assembly.GetAssembly(type).ToString();

            var newDetails = new List<string>
            {
                ProblemServiceDetails, type.ToString(), results
            };

            var newProblem = new Problem
            {
                Name = dto.Name,
                Input = dto.Input,
                Result = dto.Result,
                Details = newDetails
            };

            _context.Set<Problem>().Add(newProblem);
            await _context.SaveChangesAsync();

            var item = await _context.Set<Problem>().Where(x => x.Name == dto.Name).FirstOrDefaultAsync();

            return Ok(item);
        }

        // Gets By Id Functions
        [HttpGet("{id}")]
        public async Task<ActionResult<Problem>> GetProblemById(int id)
        {
            var problem = await _context.Set<Problem>().FindAsync(id);
            if (problem == null) return BadRequest();
            return Ok(problem);
        }

        // Gets By Id Functions
        [HttpGet("{string}")]
        public async Task<ActionResult<Problem>> RunProblemByMethodName(string name)
        {
            var type = _problemService.GetType();

            if (isValidMethodName(name))
            {
                type.GetMethod(name).Invoke(null, null);
                var newProb = new Problem
                {
                    Name = type.GetMethod(name).Name,
                    Result = "Was Ran but, No Results Given, Line:86"
                };

                return Ok(newProb);
            }
            else
            {
                return BadRequest();
            }

            // Validator
            bool isValidMethodName(string methodName)
            {
                var methodList = _problemService.GetType().GetMethods();

                var matchingName = methodList.Where(x => x.Name == methodName).FirstOrDefault();
                if (matchingName.Name.Contains(methodName))
                {
                    return true;
                }
                else
                {
                    return false;
                }

            }

        }

    }
    
}
