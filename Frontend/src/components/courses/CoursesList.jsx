import { useState, useEffect } from "react";

export const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Traemos los datos de la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://nodebackend-vv0e.onrender.com/api/v1/courses");
        const data = await response.json();
        
        // Verifica si data es un array y contiene los cursos
        if (Array.isArray(data.courses)) {
          setCourses(data.courses);
        } else {
          throw new Error("La respuesta de la API no contiene un array de cursos.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando cursos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-5 border border-gray-300 rounded-md">
      {courses.map((course, index) => (
        <div key={index} className="w-full p-4 border border-gray-200 rounded-md">
          <h2 className="text-2xl font-bold">{course.course_name}</h2>
          <p>{course.course_description}</p>
        </div>
      ))}
    </div>
  );
};

export default CoursesList;
