"use client";
import { useEntidadById } from "@/app/hooks/query/useEntidadById";
import EntidadGubernamental from "@/app/models/entidadGubernamental.model";
import entidadGubernamentalService from "@/app/services/entidades.service";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { SetStateAction } from "react";
import toast from "react-hot-toast";
import InputMask from "react-input-mask";
import * as Yup from "yup";

// Define the validation schema using Yup
const EntidadSchema = Yup.object().shape({
  nombre: Yup.string()
    .required("El nombre es requerido")
    .max(100, "El nombre no puede exceder los 100 caracteres"),
  acronimo: Yup.string()
    .required("El acrónimo es requerido")
    .max(10, "El acrónimo no puede exceder los 10 caracteres"),
  tipoEntidad: Yup.string().required("El tipo de entidad es requerido"),
  direccion: Yup.string().required("La dirección es requerida"),
  telefono: Yup.string()
    .required("El teléfono es requerido"),
  correoElectronico: Yup.string()
    .email("Debe ser un correo electrónico válido")
    .required("El correo electrónico es requerido"),
});

interface Props {
  entidadId?: number;
  handleEditedEntity?: () => Promise<void>;
  setIdToEdit?: (value: SetStateAction<number | undefined>) => void;
}

const CreateAndEditRecord: React.FC<Props> = ({
  entidadId,
  handleEditedEntity,
  setIdToEdit,
}) => {
  const { data, isFetching, error, refetch } = useEntidadById(entidadId!);

  const handleRefetch = async () => {
    await refetch();
  };

  if (isFetching) {
    return;
  }

  return (
    <div className="form-container">
      <div className={data ? "top-info" : "create-top-info"}>
        {data && (
          <button onClick={() => setIdToEdit && setIdToEdit(undefined)}>
            <ArrowBackIcon />
          </button>
        )}
        <h2>
          {data
            ? "Actualizar Entidad Gubernamental"
            : "Agregar Entidad Gubernamental"}
        </h2>
      </div>
      <Formik
        initialValues={{
          nombre: data?.nombre ?? "",
          acronimo: data?.acronimo ?? "",
          tipoEntidad: data?.tipoEntidad ?? 0,
          direccion: data?.direccion ?? "",
          telefono: data?.telefono ?? "",
          correoElectronico: data?.correoElectronico ?? "",
        }}
        validationSchema={EntidadSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          values.tipoEntidad = Number(values.tipoEntidad);
          if (data) {
            try {
              await entidadGubernamentalService.update(
                data.id,
                values as unknown as EntidadGubernamental
              );
              toast.success("Entidad Actulizada con éxito!");
              handleEditedEntity && handleEditedEntity();
              resetForm();
              handleRefetch();
            } catch (error) {
              toast.error("Ocurrió un error al actualizar la entidad.");
            } finally {
              setSubmitting(false);
            }
          } else {
            try {
              await entidadGubernamentalService.create(
                values as unknown as EntidadGubernamental
              );
              toast.success("Entidad agregada con éxito!");
              resetForm();
            } catch (error) {
              toast.error("Ocurrió un error al agregar la entidad.");
            } finally {
              setSubmitting(false);
            }
          }
        }}>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Nombre</label>
              <Field type="text" name="nombre" />
              <ErrorMessage name="nombre" component="div" className="error" />
            </div>

            <div>
              <label>Acrónimo</label>
              <Field type="text" name="acronimo" />
              <ErrorMessage name="acronimo" component="div" className="error" />
            </div>

            <div>
              <label>Tipo de Entidad</label>
              <Field as="select" name="tipoEntidad">
                <option value="">Seleccione...</option>
                <option value="0">Pública</option>
                <option value="1">Privada</option>
              </Field>
              <ErrorMessage
                name="tipoEntidad"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label>Dirección</label>
              <Field type="text" name="direccion" />
              <ErrorMessage
                name="direccion"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label>Teléfono</label>
              <Field name="telefono">
                {({ field }: { field: any }) => (
                  <InputMask
                    {...field}
                    mask="(999)-999-9999"
                    placeholder="(999)-999-9999"
                  />
                )}
              </Field>
              <ErrorMessage name="telefono" component="div" className="error" />
            </div>

            <div>
              <label>Correo Electrónico</label>
              <Field type="email" name="correoElectronico" />
              <ErrorMessage
                name="correoElectronico"
                component="div"
                className="error"
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {data ? (
                <>{isSubmitting ? "Actualizando..." : "Actualizar Entidad"}</>
              ) : (
                <>{isSubmitting ? "Enviando..." : "Agregar Entidad"}</>
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateAndEditRecord;
