using superhero.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace superhero.Domain.DTO
{
    public class ResponseDTO
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public SuperHero? Hero { get; set; }
    }
}
