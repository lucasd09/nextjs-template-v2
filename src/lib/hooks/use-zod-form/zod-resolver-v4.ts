import { FieldErrors, FieldValues, Resolver } from "react-hook-form";
import { z } from "zod/v4";

export const zodResolverV4 = <TFieldValues extends FieldValues>(
  schema: z.ZodType<TFieldValues>,
): Resolver<TFieldValues> => {
  return async (values) => {
    try {
      const data = await schema.parseAsync(values);
      return {
        values: data,
        errors: {},
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: FieldErrors<TFieldValues> = {};

        for (const issue of error.issues) {
          const path = issue.path.join(".");
          if (path) {
            fieldErrors[path as keyof TFieldValues] = {
              type: issue.code,
              message: issue.message,
            } as FieldErrors<TFieldValues>[keyof TFieldValues];
          }
        }

        return {
          values: {},
          errors: fieldErrors,
        };
      }

      // Re-throw non-Zod errors
      throw error;
    }
  };
};
