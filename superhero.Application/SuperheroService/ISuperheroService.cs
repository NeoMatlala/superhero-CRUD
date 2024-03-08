using superhero.Domain.DTO;
using superhero.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace superhero.Application.SuperheroService
{
    public interface ISuperheroService
    {
        List<SuperHero> GetSuperheroes();

        ResponseDTO GetHero(int id);

        ResponseDTO DeleteHero(int id);

        ResponseDTO CreateHero(SuperHero model);

        ResponseDTO UpdateHero(int id, SuperHero model);
    }
}
