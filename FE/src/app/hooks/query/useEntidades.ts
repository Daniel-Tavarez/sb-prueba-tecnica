import EntidadGubernamental from "@/app/models/entidadGubernamental.model";
import entidadGubernamentalService from "@/app/services/entidades.service";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useEntidades(): UseQueryResult<EntidadGubernamental[], Error> {
  return useQuery<EntidadGubernamental[], Error>({
    queryKey: ["entidades"],
    queryFn: entidadGubernamentalService.getAll,
    refetchOnWindowFocus: false,
  });
}
