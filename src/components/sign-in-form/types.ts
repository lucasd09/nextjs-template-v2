import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type SignInFormData = z.infer<typeof signInFormSchema>;

export type SignInFormProps = { onFormSubmit: (data: SignInFormData) => void };
