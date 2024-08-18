using SB.PruebaTecnica.Domain.Entities;
using SB.PruebaTecnica.Domain.Enums;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace SB.PruebaTecnica.Infrastructure.Repositories
{
    public class EntidadesRepository
    {
        private readonly string _filePath = "data/entidades_gubernamentales.txt";

        public IEnumerable<EntidadGubernamental> GetEntidades()
        {
            if (!File.Exists(_filePath))
            {
                return new List<EntidadGubernamental>();
            }

            return File.ReadAllLines(_filePath)
                       .Where(line => !string.IsNullOrWhiteSpace(line))
                       .Select(line =>
                       {
                           try
                           {
                               return ParseEntidadFromLine(line);
                           }
                           catch (FormatException ex)
                           {
                               //_logger.LogError(ex, $"Formato incorrecto en la línea: {line}");
                               return null;
                           }
                       })
                       .Where(entidad => entidad != null) // Filtrar las entidades no válidas
                       .ToList();
        }


        public void AddEntidad(EntidadGubernamental entidad)
        {
            var entidades = GetEntidades().ToList();
            entidad.Id = entidades.Any() ? entidades.Max(e => e.Id) + 1 : 1; // Genera el nuevo ID
            var line = FormatEntidadToLine(entidad);
            File.AppendAllLines(_filePath, new[] { line });
        }

        // Método para eliminar una entidad por ID
        public void DeleteEntidad(int id)
        {
            var entidades = GetEntidades().ToList();
            if (id > 0 && id <= entidades.Count)
            {
                entidades.RemoveAt(id - 1);
                File.WriteAllLines(_filePath, entidades.Select(e => FormatEntidadToLine(e)));
            }
        }

        // Método para actualizar una entidad existente
        public void UpdateEntidad(int id, EntidadGubernamental entidad)
        {
            var entidades = GetEntidades().ToList();
            var index = entidades.FindIndex(e => e.Id == id);

            if (index >= 0)
            {
                var entidadExistente = entidades[index];

                // Actualizar solo los campos que tienen valores
                entidadExistente.Nombre = entidad.Nombre ?? entidadExistente.Nombre;
                entidadExistente.Acronimo = entidad.Acronimo ?? entidadExistente.Acronimo;
                entidadExistente.TipoEntidad = entidad.TipoEntidad ?? entidadExistente.TipoEntidad;
                entidadExistente.Direccion = entidad.Direccion ?? entidadExistente.Direccion;
                entidadExistente.Telefono = entidad.Telefono ?? entidadExistente.Telefono;
                entidadExistente.CorreoElectronico = entidad.CorreoElectronico ?? entidadExistente.CorreoElectronico;

                // Reemplazar la entidad actualizada en la lista
                entidades[index] = entidadExistente;

                // Escribir las entidades actualizadas al archivo
                File.WriteAllLines(_filePath, entidades.Select(e => FormatEntidadToLine(e)));
            }
        }

        // Método para convertir una línea del archivo en una entidad
        private EntidadGubernamental ParseEntidadFromLine(string line)
        {
            var parts = line.Split(',');

            int id;
            string nombre = parts.Length > 1 ? parts[1] : null;
            string acronimo = parts.Length > 2 ? parts[2] : null;
            TipoEntidad tipoEntidad;

            if (!int.TryParse(parts[0], out id))
            {
                // Manejar el caso en que el ID no es un número válido
                throw new FormatException("El ID no es un número válido.");
            }

            if (!Enum.TryParse(parts.Length > 3 ? parts[3] : null, out tipoEntidad))
            {
                tipoEntidad = TipoEntidad.Publica; // O manejarlo de otra manera si no es válido
            }

            return new EntidadGubernamental
            {
                Id = id,
                Nombre = nombre,
                Acronimo = acronimo,
                TipoEntidad = tipoEntidad,
                Direccion = parts.Length > 4 ? parts[4] : null,
                Telefono = parts.Length > 5 ? parts[5] : null,
                CorreoElectronico = parts.Length > 6 ? parts[6] : null,
            };
        }


        private string FormatEntidadToLine(EntidadGubernamental entidad)
        {
            return $"{entidad.Id}," +
                   $"{entidad.Nombre}," +
                   $"{entidad.Acronimo}," +
                   $"{(entidad.TipoEntidad.HasValue ? entidad.TipoEntidad.ToString() : "")}," +
                   $"{entidad.Direccion}," +
                   $"{entidad.Telefono}," + // Se almacena directamente como string
                   $"{entidad.CorreoElectronico}";
        }
    }
}
