using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Words.Api.Data.Dtos
{
    public class CreateProblemDto
    {
        public string Name { get; set; }
        public int Input { get; set; }
        public string Result { get; set; }
        public List<string> Details { get; set; } 

    }
}
