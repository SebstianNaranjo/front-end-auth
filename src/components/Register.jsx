import { useState } from "react";
import { registerService } from "../services/authService";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    documentNumber: "",
  });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();
    setMensaje("Registrando...");

    const respuesta = await registerService(form);

    if (respuesta.tokenJWT) {
      setMensaje(
        `Usuario registrado correctamente, el token generado es ${respuesta.tokenJWT}`
      );
    } else {
      setMensaje(
        `Error al hacer proceso de registro, error: ${
          respuesta.message || respuesta.error
        }`
      );
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded shadow-md border">
      <h2 className="text-xl font-bold mb-4 text-center text-green-600">
        Crear Cuenta
      </h2>
      <form onSubmit={enviarFormulario} className="space-y-3">
        <input
          name="username"
          type="text"
          placeholder="Nombre de usuario"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          name="documentNumber"
          type="text"
          placeholder="Número de Documento"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded"
        >
          Registrarse
        </button>
      </form>
      {mensaje && (
        <p className="mt-4 text-sm text-center bg-gray-100 p-2 break-words">
          {mensaje}
        </p>
      )}
    </div>
  );
};

export default Register;
