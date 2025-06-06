import { z } from "zod/v4";

export const signInFormSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type SignInFormData = z.infer<typeof signInFormSchema>;

export type SignInFormProps = { onFormSubmit: () => void };
