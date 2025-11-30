import React, { useState } from "react";
import { loginService } from "../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarFormulario = async (e) => {
    e.preventDefault();
    setMensaje("Cargando...");

    const respuesta = await loginService(email, password);
    console.log("que pasa aqui", respuesta);

    if (respuesta.tokenJWT) {
      setMensaje(
        `Usuario logueado, el token generado es ${respuesta.tokenJWT}`
      );
    } else {
      setMensaje(
        `Error al hacer proceso de login, error: ${respuesta.message}`
      );
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded shadow-md border">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-600">
        Iniciar Sesión
      </h2>
      <form onSubmit={enviarFormulario} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          required
          className="w-full p-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Ingresar
        </button>
      </form>
      {mensaje && (
        <p className="mt-4 text-sm text-center bg-gray-100 p-2">{mensaje}</p>
      )}
    </div>
  );
};

export default Login;
