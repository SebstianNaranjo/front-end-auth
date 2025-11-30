import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

export const App = () => {
  const [vista, setVista] = useState("login");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Parcial Final Auth
      </h1>
      <div className="mb-6 bg-white p-2 rounded shadow">
        <button
          onClick={() => setVista("login")}
          className={`px-4 py-2 rounded mr-2 ${
            vista === "login" ? "bg-blue-600 text-white" : "text-gray-600"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setVista("registro")}
          className={`px-4 py-2 rounded ${
            vista === "registro" ? "bg-green-600 text-white" : "text-gray-600"
          }`}
        >
          Registro
        </button>
      </div>
      {vista === "login" ? <Login /> : <Register />}
    </div>
  );
};
