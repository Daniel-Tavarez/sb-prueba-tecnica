import Response from "@/app/common/interfaces/response";
import { UseQueryResult } from "@tanstack/react-query";

export type GetAll<T> = UseQueryResult<Response<T[]>>;
export type GetById<T> = UseQueryResult<Response<T>>;