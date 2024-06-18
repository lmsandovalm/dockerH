import { useState } from "react";

function CoursesEdit() {
  const [courseData, setCourseData] = useState({
    title: "Curso a editar",
    description: "Descripción del curso a editar",
    instructor: "Instructor del curso a editar",
    // Otros campos del curso
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos editados del curso al servidor
    console.log("Datos editados del curso:", courseData);
  };

  return (
    <div>
      <h2>Editar Curso</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={courseData.title}
          onChange={handleChange}
          placeholder="Título del curso"
        />
        {/* Otros campos del formulario */}
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default CoursesEdit;
