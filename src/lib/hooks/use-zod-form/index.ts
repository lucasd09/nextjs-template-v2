import { FieldValues, useForm, UseFormReturn } from "react-hook-form";
import { UseZodFormOptions } from "./types";
import { zodErrorMap } from "./zod-error-map";
import z from "zod/v4";
import { zodResolverV4 } from "./zod-resolver-v4";

export const useZodForm = <TFieldValues extends FieldValues>({
  schema,
  defaultValues,
}: UseZodFormOptions<TFieldValues>): UseFormReturn<TFieldValues> => {
  return useForm<TFieldValues>({
    resolver: zodResolverV4(schema),
    defaultValues,
  });
};

z.config({ customError: zodErrorMap });
