import { z } from "zod/v4";

export const zodErrorMap: z.core.$ZodErrorMap<z.core.$ZodIssue> = (issue) => {
  if (issue.code === "too_small" && issue.type === "string") {
    return {
      message: `Please enter at least ${issue.minimum} characters`,
    };
  }

  if (issue.defaultError === "Required") {
    return {
      message: "Please provide a value",
    };
  }

  return {
    message: issue.defaultError,
  };
};
