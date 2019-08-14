using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Vinformatix.Api.Data;

namespace Words.Api.Data.Entities
{
    public class Word
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class WordConfiguration : IEntityTypeConfiguration<Word>
    {
        public void Configure(EntityTypeBuilder<Word> builder)
        {
            
        }
    }
}
