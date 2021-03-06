﻿using System;
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
    public class WordsController : ControllerBase
    {
        private readonly WordsDataContext _context;

        public WordsController(WordsDataContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<ActionResult<List<Word>>> GetAllWords()
        {
            return await _context.Set<Word>().ToListAsync();
        }

        public class CreateWordDto
        {
            public string WordToAdd { get; set; }
        }

        [HttpPost]
        public ActionResult<Word> CreateWord(CreateWordDto dto)
        {
            var addMe = new Word
            {
                Name = dto.WordToAdd
            };
            _context.Set<Word>().Add(addMe);
            _context.SaveChanges();

            return Created($"/api/Words/{addMe.Id}", addMe);
        }
    }
}