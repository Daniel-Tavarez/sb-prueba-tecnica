using SB.PruebaTecnica.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SB.PruebaTecnica.Application.Interfaces
{
    public interface IEntidadGubernamentalService
    {
        IEnumerable<EntidadGubernamental> GetAllEntidades();
        IEnumerable<EntidadGubernamental> SearchEntidadesByName(string name);
        void AddEntidad(EntidadGubernamental entidad);
        EntidadGubernamental GetEntidadById(int id);
        void DeleteEntidad(int id);
        void UpdateEntidad(int id, EntidadGubernamental entidad);
    }
}
