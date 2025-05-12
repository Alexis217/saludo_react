import { useState } from 'react';
import './App.css';
import { validarNombre, obtenerSaludo } from './api/saludo';

function App() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);
    setError('');
    setMensaje('');

    try {
      const datosValidacion = await validarNombre(nombre);

      if (!datosValidacion.valido) {
        setError('Nombre no válido. Por favor, ingresa un nombre de la lista.');
        return;
      }

      const saludo = await obtenerSaludo(nombre);
      setMensaje(saludo);
    } catch (err) {
      setError('Error al conectar con el servidor');
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Bienvenido</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa tu nombre"
          required
        />
        <button type="submit" disabled={cargando}>
          {cargando ? 'Validando...' : 'Saludar'}
        </button>
      </form>

      {error && <p className="error">{error}</p>}
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
}

export default App;