import { FormEvent, useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export function Login() {
  const { login, user } = useAuth();
  const usernameRef = useRef<HTMLInputElement>(null);
  console.log(user);
  if (user != null) return <Navigate to="/" />;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (login.isPending) return;

    const username = usernameRef.current?.value;

    // checking if the properties exist
    if (username == null || username === "") {
      return;
    }

    login.mutate(username);
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-end"
      >
        <label htmlFor="userName">Username</label>
        <Input id="userName" required ref={usernameRef} />

        <Button
          disabled={login.isPending}
          type="submit"
          className="col-span-full"
        >
          {login.isPending ? "Loading..." : "Login"}
        </Button>
      </form>
    </>
  );
}
