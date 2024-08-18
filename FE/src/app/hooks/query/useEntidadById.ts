import EntidadGubernamental from "@/app/models/entidadGubernamental.model";
import entidadGubernamentalService from "@/app/services/entidades.service";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useEntidadById(
  id: number
): UseQueryResult<EntidadGubernamental, Error> {
  return useQuery<EntidadGubernamental, Error>({
    queryKey: ["entidades", id],
    queryFn: () => entidadGubernamentalService.getById(id),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
}
