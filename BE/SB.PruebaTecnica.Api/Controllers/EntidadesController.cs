
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SB.PruebaTecnica.Application.Interfaces;
using SB.PruebaTecnica.Domain.Entities;
using System;

namespace SB.PruebaTecnica.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EntidadesController : ControllerBase
    {
        private readonly IEntidadGubernamentalService _service;
        private readonly ILogger<EntidadesController> _logger;

        public EntidadesController(IEntidadGubernamentalService service, ILogger<EntidadesController> logger)
        {
            _service = service;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var entidades = _service.GetAllEntidades();
                return Ok(entidades);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Ocurrió un error al recuperar las entidades.");
                return StatusCode(500, new { message = "Ocurrió un error al recuperar las entidades.", details = ex.Message });
            }
        }

        [HttpGet("search")]
        public IActionResult SearchByName([FromQuery] string name)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(name))
                {
                    return BadRequest(new { message = "El parámetro de búsqueda no puede estar vacío." });
                }

                var entidades = _service.SearchEntidadesByName(name);
                if (!entidades.Any())
                {
                    return NotFound(new { message = "No se encontraron entidades que coincidan con la búsqueda." });
                }

                return Ok(entidades);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Ocurrió un error al buscar entidades por nombre.");
                return StatusCode(500, new { message = "Ocurrió un error al buscar entidades por nombre.", details = ex.Message });
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                var entidad = _service.GetEntidadById(id);
                if (entidad == null)
                {
                    _logger.LogWarning("Entidad con id {Id} no encontrada.", id);
                    return NotFound(new { message = "Entidad no encontrada." });
                }
                return Ok(entidad);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Ocurrió un error al recuperar la entidad con id {Id}.", id);
                return StatusCode(500, new { message = "Ocurrió un error al recuperar la entidad.", details = ex.Message });
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] EntidadGubernamental entidad)
        {
            try
            {
                _service.AddEntidad(entidad);
                return CreatedAtAction(nameof(GetById), new { id = entidad.Id }, entidad);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Ocurrió un error al agregar la entidad.");
                return StatusCode(500, new { message = "Ocurrió un error al agregar la entidad.", details = ex.Message });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var entidad = _service.GetEntidadById(id);
                if (entidad == null)
                {
                    _logger.LogWarning("Solicitud de eliminación fallida: Entidad con id {Id} no encontrada.", id);
                    return NotFound(new { message = "Entidad no encontrada." });
                }

                _service.DeleteEntidad(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Ocurrió un error al eliminar la entidad con id {Id}.", id);
                return StatusCode(500, new { message = "Ocurrió un error al eliminar la entidad.", details = ex.Message });
            }
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] EntidadGubernamental entidad)
        {
            try
            {
                var entidadExistente = _service.GetEntidadById(id);
                if (entidadExistente == null)
                {
                    _logger.LogWarning("Solicitud de actualización fallida: Entidad con id {Id} no encontrada.", id);
                    return NotFound(new { message = "Entidad no encontrada." });
                }

                _service.UpdateEntidad(id, entidad);
                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Ocurrió un error al actualizar la entidad con id {Id}.", id);
                return StatusCode(500, new { message = "Ocurrió un error al actualizar la entidad.", details = ex.Message });
            }
        }
    }
}
