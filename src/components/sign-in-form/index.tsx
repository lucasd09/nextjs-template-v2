'use client'
import { useZodForm } from "@/lib/hooks/use-zod-form"
import { SignInFormData, signInFormSchema } from "./types"
import { Form } from "../form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export const SignInForm = () => {
  const form = useZodForm({ schema: signInFormSchema })

  const handleFormSubmit = async (data: SignInFormData) => {
    console.log(data);
  }

  return <Form form={form} onSubmit={handleFormSubmit}>
    <Input name="email" form={form} />
    <Input name="password" type="password" form={form} />
    <Button className="w-full">Submit</Button>
  </Form>

}