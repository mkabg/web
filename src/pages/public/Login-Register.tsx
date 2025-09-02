import { useState } from "react";

function LoginForm() {
  return (
    <form action="Login" method="post">
        <label htmlFor="userName">User Name</label>
        <input type="text" name="userName" id="userName"/>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password"/>
        <button onClick={Login}>Login</button>
    </form>
  );
}

function RegisterForm() {
  return (
    <form action="Register" method="post">
        <label htmlFor="fullName">Full Name</label>
        <input type="text" name="fullName" id="fullName"/>
        <label htmlFor="userName">User Name</label>
        <input type="text" name="userName" id="userName"/>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password"/>
        <button onClick={Register}>Register</button>
    </form>
  );
}

export default function LoginRegister() {
  const [mode, setMode] = useState<"login" | "register">();

  return (
    <div>
      <button onClick={() => setMode("login")}>Login</button>
      <button onClick={() => setMode("register")}>Register</button>
      {mode === "login" ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}

const Login = () => {};

const Register = () => {};
