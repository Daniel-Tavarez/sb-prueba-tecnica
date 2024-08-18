import EntidadGubernamental from "@/app/models/entidadGubernamental.model";
import entidadGubernamentalService from "@/app/services/entidades.service";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useEntidadesByname(
  name: string
): UseQueryResult<EntidadGubernamental[], Error> {
  return useQuery<EntidadGubernamental[], Error>({
    queryKey: ["entidades", name],
    queryFn: () => entidadGubernamentalService.getAllByName(name),
    refetchOnWindowFocus: false,
    enabled: !!name,
  });
}
