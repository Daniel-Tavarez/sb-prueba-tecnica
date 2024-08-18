import EntidadGubernamental from '@/app/models/entidadGubernamental.model';
import React from 'react';

interface EntidadCardProps {
  entidad: EntidadGubernamental;
}

const EntidadCard: React.FC<EntidadCardProps> = ({ entidad }) => {
  return (
    <div className="card">
      <h3>{entidad.nombre}</h3>
      <p><strong>Acrónimo:</strong> {entidad.acronimo}</p>
      <p><strong>Tipo:</strong> {entidad.tipoEntidad === 0 ? 'Pública' : 'Privada'}</p>
      <p><strong>Dirección:</strong> {entidad.direccion}</p>
      <p><strong>Teléfono:</strong> {entidad.telefono}</p>
      <p><strong>Correo Electrónico:</strong> {entidad.correoElectronico}</p>
    </div>
  );
}

export default EntidadCard;
