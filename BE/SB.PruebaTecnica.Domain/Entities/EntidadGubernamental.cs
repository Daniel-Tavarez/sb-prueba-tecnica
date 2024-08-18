using SB.PruebaTecnica.Domain.Enums;

namespace SB.PruebaTecnica.Domain.Entities
{
    public class EntidadGubernamental
    {
        public int Id { get; set; }
        public string? Nombre { get; set; }
        public string? Acronimo { get; set; }
        public TipoEntidad? TipoEntidad { get; set; }
        public string? Direccion { get; set; }
        public string? Telefono { get; set; }
        public string? CorreoElectronico { get; set; }
    }
}
