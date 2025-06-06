import { useZodForm } from "@/lib/hooks/use-zod-form"
import { SignInFormProps, signInFormSchema } from "./types"
import { Form } from "../form"

export const SignInForm = ({ onFormSubmit }: SignInFormProps) => {
  const form = useZodForm({ schema: signInFormSchema })


  return <Form form={form} onSubmit={onFormSubmit}>

  </Form>

}