import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";
import { HttpResponse } from "../models";
import { useHandleError } from "./useHandleError";
interface ApiQuery<T> {
  queryKey: string[];
  options?: UseQueryOptions<HttpResponse<T>>;
  onError?: () => void;
  queryFn: QueryFunction<HttpResponse<T>>;
}

const useApiQuery = <T>({ queryKey, options, queryFn }: ApiQuery<T>) => {
  const { handleError, message } = useHandleError();
  console.log("message apiquery", message);
  const defaultOptions: UseQueryOptions<HttpResponse<T>> = {
    refetchOnWindowFocus: false,
    suspense: true,
    staleTime: 10000,
    onSettled: (errors) => {
      if (!errors?.ok && errors?.error) {
        handleError(errors.error);
      }
    },
  };

  const mergeOptions = { ...options, ...defaultOptions };

  const query = useQuery<HttpResponse<T>>(queryKey, queryFn, {
    ...mergeOptions,
  });
  return { ...query };
};

export default useApiQuery;
