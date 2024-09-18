import { signIn } from "../auth";

export default function SignIn() {
  async function login() {
    "use server";

    await signIn("facebook");
  }
  return (
    <form action={login}>
      <button type="submit">Sign in with Facebook</button>
    </form>
  );
}
