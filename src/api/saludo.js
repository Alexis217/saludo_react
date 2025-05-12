export const validarNombre = async (nombre) => {
  try {
    const response = await fetch(`http://localhost:3000/validar/${nombre}`);
    if (!response.ok) throw new Error("Error en la validación");
    return await response.json();
  } catch (error) {
    console.error("Error al validar nombre:", error);
    throw error;
  }
};

export const obtenerSaludo = async (nombre) => {
  try {
    const response = await fetch(`http://localhost:3000/saludo/${nombre}`);
    if (!response.ok) throw new Error("Error al obtener saludo");
    return await response.text();
  } catch (error) {
    console.error("Error al obtener saludo:", error);
    throw error;
  }
};
