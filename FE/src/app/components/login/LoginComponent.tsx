"use client";
import authService from "@/app/services/auth.service";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await authService.login(username, password);
      toast.success("Ha iniciado sesión correctamente!");
      router.push("/");
    } catch (err) {
      toast.error("Ocurrió un error al iniciar sesión.");
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <label>Usuario</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;
