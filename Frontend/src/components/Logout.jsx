import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { RiCheckLine } from "react-icons/ri";

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showMessage] = useState(true);

  useEffect(() => {
    logout(); // Llama a la función de logout desde el contexto
    const timer = setTimeout(() => {
      navigate('/login'); // Redirige al usuario a la página de inicio de sesión después de 3 segundos
    }, 2000); // Espera 3 segundos antes de redirigir

    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  }, [logout, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-md text-center flex flex-col items-center">
        <img
          src="/src/assets/image/IAprendix_logo.png"
          alt="IAprendix Logo"
          className="h-12 w-full mb-4"
        />
        {showMessage && (
          <div className="flex flex-col items-center justify-center">
            <div className="bg-green-100 rounded-full p-3 mb-4">
              <RiCheckLine className="text-green-700 text-4xl" />
            </div>
            <div className="text-gray-900 text-lg font-bold mb-2">
              Sesión cerrada exitosamente
            </div>
            <div className="text-gray-600">
              Vuelve pronto, Aprendix
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logout;
