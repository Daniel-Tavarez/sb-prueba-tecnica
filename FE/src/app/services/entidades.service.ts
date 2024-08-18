// services/entidadGubernamentalService.ts
import EntidadGubernamental from "../models/entidadGubernamental.model";
import baseService from "./BaseService";

const entidadGubernamentalService = {
  getAll: async (): Promise<EntidadGubernamental[]> => {
    return baseService.get<EntidadGubernamental[]>("/entidades");
  },

  getAllByName: async (params: string): Promise<EntidadGubernamental[]> => {
    return baseService.get<EntidadGubernamental[]>(
      `/entidades/search?name=${params}`
    );
  },

  getById: async (id: number): Promise<EntidadGubernamental> => {
    return baseService.get<EntidadGubernamental>(`/entidades/${id}`);
  },

  create: async (
    entidad: EntidadGubernamental
  ): Promise<EntidadGubernamental> => {
    return baseService.post<EntidadGubernamental>("/entidades", entidad);
  },

  update: async (
    id: number,
    entidad: EntidadGubernamental
  ): Promise<EntidadGubernamental> => {
    return baseService.put<EntidadGubernamental>(`/entidades/${id}`, entidad);
  },

  delete: async (id: number): Promise<void> => {
    return baseService.delete<void>(`/entidades/${id}`);
  },
};

export default entidadGubernamentalService;
