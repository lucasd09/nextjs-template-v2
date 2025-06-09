import { SignInForm } from "@/components/sign-in-form";
import { signIn } from "./actions";

export default function SignInPage() {
  return (
    <div className="max-w-lg w-full space-y-6">
      <h1 className="text-center">Sign in to your Account</h1>
      <SignInForm onFormSubmit={signIn} />
    </div>
  );
}
