const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const API_URL = `${BASE_URL}api/v1/auth`;

export const loginService = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return await response.json();
  } catch {
    return { status: "error", message: "Error al conectar con el servidor" };
  }
};

export const registerService = async (datos) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });
    return await response.json();
  } catch {
    return { status: "error", message: "Error al conectar con el servidor" };
  }
};
