using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Words.Api.Data;
using Words.Api.Data.Entities;

namespace Words.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NumbersController : ControllerBase
    {
        private readonly WordsDataContext _context;

        public NumbersController(WordsDataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Number>>> GetAllNumbers()
        {
            return await _context.Set<Number>().ToListAsync();
        }
    }
}

// Created = 201
// OK = 200

// POST = Created
// GET, PUT, DELETE = OK