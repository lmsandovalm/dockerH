

function CoursesDelete() {
  const handleDelete = () => {
    // Lógica para eliminar el curso del servidor
    console.log("Curso eliminado");
  };

  return (
    <div>
      <h2>Eliminar Curso</h2>
      <p>¿Estás seguro de que deseas eliminar este curso?</p>
      <button onClick={handleDelete}>Eliminar Curso</button>
    </div>
  );
}

export default CoursesDelete;
