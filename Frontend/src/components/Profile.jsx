import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Profile = () => {
  const [selectedImage] = useState(null);
  const { user, setUser } = useContext(AuthContext); // Obtén los datos del usuario y la función setUser para actualizar el contexto

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const response = await fetch("https://nodebackend-vv0e.onrender.com/api/v1/users/updatePhoto/", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Asegúrate de incluir el token de autorización si es necesario
        },
        body: formData,
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser.data.user.role.name_role); // Actualiza el contexto con los datos del usuario actualizados
      } else {
        console.error("Error al actualizar la foto de perfil");
      }
    } catch (error) {
      console.error("Error en la solicitud de actualización de foto de perfil:", error);
    }
  };

  if (!user) return 'Cargando...';

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg">
        <h1 className="text-center text-2xl font-bold mb-4">Perfil de Usuario</h1>
        <div className="flex flex-col items-center bg-secondary-100 p-8 rounded-xl mb-8">
          <div className="w-full max-w-lg">
            <div className="flex items-center mb-8">
              <div className="w-1/4">
                <p className="text-xl font-semibold text-gray-800">Avatar</p>
              </div>
              <div className="flex-1">
                <img
                  src={selectedImage || user.avatarUrl || "https://via.placeholder.com/150"}
                  className="w-36 h-36 object-cover rounded-lg"
                  alt="User Avatar"
                />
                <input type="file" onChange={handleImageChange} />
                <p className="text-gray-500 text-sm mt-2">
                  Tipos de archivos permitidos: PNG, JPG, JPEG.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-xl font-semibold text-gray-800">Nombre Completo</p>
                <p className="text-gray-500 mt-2">{`${user.name || ""} ${user.lastname || ""}`}</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-800">Email</p>
                <p className="text-gray-500 mt-2">{user.email || ""}</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-800">Role</p>
                <p className="text-gray-500 mt-2">{user.role.name_role || ""}</p>
              </div>
            </div>
            {/* Otros campos del formulario */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
