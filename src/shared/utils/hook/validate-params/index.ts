import { ZodObject } from "zod";
import { useParams } from "react-router-dom";

const useValidateParams = <T extends Record<string, string>>(
  schema: ZodObject,
) => {
  const props = useParams<T>();

  schema.parse(props);

  return props as T;
};

export { useValidateParams };
