using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using superhero.Application.SuperheroService;
using superhero.Domain.Models;

namespace superhero.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperheroController : ControllerBase
    {
        private readonly ISuperheroService _superheroService;

        public SuperheroController(ISuperheroService superheroService)
        {
            _superheroService = superheroService;
        }

        // READ
        [HttpGet("get-all-heroes")]
        public IActionResult GetHeroes()
        {
            var result = _superheroService.GetSuperheroes();

            return Ok(result);
        }

        [HttpGet("get-hero/{id}")]
        public IActionResult GetHero(int id)
        {
            var result = _superheroService.GetHero(id);

            if (!result.Success)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        // CREATE
        [HttpPost("create-hero")]
        public IActionResult CreateHero([FromBody] SuperHero model)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = _superheroService.CreateHero(model);

            if (!result.Success)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        // UPDATE
        [HttpPut("update-hero/{id}")]
        public IActionResult UpdateHero(int id, [FromBody] SuperHero model)
        {
            var result = _superheroService.UpdateHero(id, model);

            if (!result.Success)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        // DELETE
        [HttpDelete("delete-hero/{id}")]
        public IActionResult DeleteHero(int id)
        {
            var result = _superheroService.DeleteHero(id);

            if (!result.Success)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }
    }
}
