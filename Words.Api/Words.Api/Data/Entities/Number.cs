using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Words.Api.Data.Entities
{
    public class Number
    {
        public int Id { get; set; }
        public int DisplayNumber { get; set; }
    }
    public class NumbersConfiguration : IEntityTypeConfiguration<Number>
    {
        public void Configure(EntityTypeBuilder<Number> builder)
        {

        }
    }
}
