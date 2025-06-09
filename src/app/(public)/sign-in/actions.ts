"use server";

import { SignInFormData } from "@/components/sign-in-form/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signIn = async (data: SignInFormData) => {
  const jar = await cookies();

  await jar.set("token", data.email);

  redirect("/");
};
