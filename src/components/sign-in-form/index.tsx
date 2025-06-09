'use client'
import { useZodForm } from "@/lib/hooks/use-zod-form"
import { SignInFormProps, signInFormSchema } from "./types"
import { Form } from "../form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export const SignInForm = ({ onFormSubmit }: SignInFormProps) => {
  const form = useZodForm({ schema: signInFormSchema })

  return <Form form={form} onSubmit={onFormSubmit}>
    <Input name="email" form={form} />
    <Input name="password" type="password" form={form} />
    <Button className="w-full">Submit</Button>
  </Form>

}