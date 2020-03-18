using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Words.Api.Data.Entities
{
    public class Problem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Input { get; set; }
        public string Result { get; set; }
        public ICollection<string> Details = new List<string>();
    }

    public class ProblemConfiguration : IEntityTypeConfiguration<Problem>
    {
        public void Configure(EntityTypeBuilder<Problem> builder)
        {

        }
    }
}
