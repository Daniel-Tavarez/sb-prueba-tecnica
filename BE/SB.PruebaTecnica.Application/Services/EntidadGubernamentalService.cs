using SB.PruebaTecnica.Application.Interfaces;
using SB.PruebaTecnica.Domain.Entities;
using SB.PruebaTecnica.Infrastructure.Repositories;
using System.Collections.Generic;

namespace SB.PruebaTecnica.Application.Services
{
    public class EntidadGubernamentalService : IEntidadGubernamentalService
    {
        private readonly EntidadesRepository _repository;

        public EntidadGubernamentalService(EntidadesRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<EntidadGubernamental> GetAllEntidades()
        {
            return _repository.GetEntidades();
        }

        public IEnumerable<EntidadGubernamental> SearchEntidadesByName(string name)
        {
            return _repository.GetEntidades()
                              .Where(e => e.Nombre.Contains(name, StringComparison.OrdinalIgnoreCase))
                              .ToList();
        }

        public EntidadGubernamental GetEntidadById(int id)
        {
            return _repository.GetEntidades().FirstOrDefault(e => e.Id == id);
        }

        public void AddEntidad(EntidadGubernamental entidad)
        {
            _repository.AddEntidad(entidad);
        }

        public void DeleteEntidad(int id)
        {
            _repository.DeleteEntidad(id);
        }

        public void UpdateEntidad(int id, EntidadGubernamental entidad)
        {
            _repository.UpdateEntidad(id, entidad);
        }
    }
}
