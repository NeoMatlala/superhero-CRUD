using superhero.Domain.DTO;
using superhero.Domain.Models;
using superhero.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace superhero.Application.SuperheroService
{
    public class SuperheroService : ISuperheroService
    {
        private readonly ApplicationDbContext _db;

        public SuperheroService(ApplicationDbContext db)
        {
            _db = db;
        }

        public List<SuperHero> GetSuperheroes()
        {
            var heroes = _db.SuperHeros.ToList();

            return heroes;
        }

        public ResponseDTO GetHero(int id)
        {
            if (id == 0 || id == null)
            {
                return new ResponseDTO
                {
                    Success = false,
                    Message = "Invalid ID!"
                };
            }

            try
            {
                var hero = _db.SuperHeros.Find(id);

                if (hero == null)
                {
                    return new ResponseDTO
                    {
                        Success = false,
                        Message = $"There's no user with ID: {id}"
                    };
                }

                return new ResponseDTO
                {
                    Success = true,
                    Hero = hero
                };

            }
            catch (Exception ex)
            {
                return new ResponseDTO
                {
                    Success = false,
                    Message = $"Hero does not exist: {ex.Message}"
                };
            }
        }

        public ResponseDTO CreateHero(SuperHero model)
        {
            try
            {
                var hero = new SuperHero
                {
                    Name = model.Name,
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Place = model.Place
                };

                _db.SuperHeros.Add(hero);
                _db.SaveChanges();

                return new ResponseDTO
                {
                    Success = true,
                    Message = $"{hero.Name} successfully created!"
                };

            } catch (Exception ex)
            {
                return new ResponseDTO
                {
                    Success = false,
                    Message = $"Error creating superhero: {ex.Message}"
                };
            }
        }

        public ResponseDTO UpdateHero(int id, SuperHero model)
        {
            if (id == 0 || id == null)
            {
                return new ResponseDTO
                {
                    Success = false,
                    Message = "Invalid ID!"
                };
            }

            try
            {
                // find hero
                var hero = _db.SuperHeros.Find(id);

                if ( hero == null)
                {
                    return new ResponseDTO
                    {
                        Success = false,
                        Message = $"No superhero with id {id}"
                    };
                }

                // update hero
                if (!string.IsNullOrEmpty(model.Name))
                {
                    hero.Name = model.Name;
                }

                if (!string.IsNullOrEmpty(model.FirstName))
                {
                    hero.FirstName = model.FirstName;
                }

                if (!string.IsNullOrEmpty(model.LastName))
                {
                    hero.LastName = model.LastName;
                }

                if (!string.IsNullOrEmpty(model.Place))
                {
                    hero.Place = model.Place;
                }

                _db.SuperHeros.Update(hero);
                _db.SaveChanges();

                return new ResponseDTO
                {
                    Success = true,
                    Message = "Superhero successfully updated."
                };
            } 
            catch (Exception ex)
            {
                return new ResponseDTO
                {
                    Success = false,
                    Message = $"Error updating super hero: ${ex.Message}"
                };
            }
        }

        public ResponseDTO DeleteHero(int id)
        {
            if (id == 0 || id == null)
            {
                return new ResponseDTO
                {
                    Success = false,
                    Message = "Invalid ID!"
                };
            }

            try
            {
                var hero = _db.SuperHeros.Find(id);

                if (hero == null)
                {
                    return new ResponseDTO
                    {
                        Success = false,
                        Message = $"There's no user with ID: {id}"
                    };
                }

                _db.SuperHeros.Remove(hero);
                _db.SaveChanges();

                return new ResponseDTO
                {
                    Success = true,
                    Message = "Hero successfully deleted"
                };

            }
            catch (Exception ex)
            {
                return new ResponseDTO
                {
                    Success = false,
                    Message = $"Error deleting hero: {ex.Message}"
                };
            }
        }
    }
}
