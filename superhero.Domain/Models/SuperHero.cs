using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace superhero.Domain.Models
{
    public class SuperHero
    {
        public int SuperHeroId { get; set; }
        public string Name { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Place { get; set; }
    }
}
