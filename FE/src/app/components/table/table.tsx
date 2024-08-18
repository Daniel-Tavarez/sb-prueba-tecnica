import EntidadGubernamental from "@/app/models/entidadGubernamental.model";
import entidadGubernamentalService from "@/app/services/entidades.service";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import CreateAndEditRecord from "../createRecord/CreateAndEditRecord";

interface Props {
  data: EntidadGubernamental[] | undefined;
  handleRefetch: () => Promise<void>;
}

const Table: FC<Props> = ({ data, handleRefetch }) => {
  const [idToEdit, setIdToEdit] = useState<number | undefined>();

  const handleEditedEntity = async () => {
    await handleRefetch();
    setIdToEdit(undefined);
  };

  const deleteEntidad = async (id: number) => {
    Swal.fire({
      title: "Está seguro/a?",
      text: "No podrás revertirlo luego!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await entidadGubernamentalService.delete(id);
          toast.success("Entidad eliminada con éxito!");
          await handleRefetch();
        } catch (error) {
          toast.error("Ocurrió un error al agregar la entidad.");
        }
      }
    });
  };

  return (
    <>
      {idToEdit ? (
        <>
          <CreateAndEditRecord
            entidadId={idToEdit}
            handleEditedEntity={handleEditedEntity}
            setIdToEdit={setIdToEdit}
          />
        </>
      ) : (
        <div className="table-container">
          <h1>Entidades Gubernamentales</h1>
          <table className="entidades-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Acrónimo</th>
                <th>Tipo</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Correo Electrónico</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((entidad) => (
                <tr key={entidad.id}>
                  <td>{entidad.nombre}</td>
                  <td>{entidad.acronimo}</td>
                  <td>{entidad.tipoEntidad === 0 ? "Pública" : "Privada"}</td>
                  <td>{entidad.direccion}</td>
                  <td>{entidad.telefono}</td>
                  <td>{entidad.correoElectronico}</td>
                  <td className="edit">
                    <button onClick={() => setIdToEdit(entidad.id)}>
                      <BorderColorIcon />
                    </button>
                  </td>
                  <td className="delete">
                    <button onClick={() => deleteEntidad(entidad.id)}>
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
