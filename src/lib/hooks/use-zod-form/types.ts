import { DefaultValues, FieldValues } from "react-hook-form";
import { ZodType } from "zod/v4";

export type UseZodFormOptions<TFieldValues extends FieldValues> = {
  schema: ZodType<TFieldValues>;
  defaultValues?: DefaultValues<TFieldValues>;
};
