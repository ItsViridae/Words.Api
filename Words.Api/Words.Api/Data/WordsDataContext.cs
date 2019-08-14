using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Vinformatix.Api.Data;

namespace Words.Api.Data
{
    public class WordsDataContext : DataContextBase
    {
        public WordsDataContext(DbContextOptions<WordsDataContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            ApplyConfigurations(builder);
        }

    }
}
