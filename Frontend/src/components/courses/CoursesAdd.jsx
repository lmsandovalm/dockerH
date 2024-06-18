import { useState } from "react";

export const CoursesAdd = () => {
  const [courseData, setCourseData] = useState({
    coure_name: "",
    coure_description: ""
  });

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://nodebackend-vv0e.onrender.com/api/v1/courses/registerCourse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 p-5 border border-gray-300 rounded-md">
      <label className="flex flex-col text-lg">
        Nombre del curso:
        <input type="text" name="coure_name" value={courseData.coure_name} onChange={handleChange} required className="mt-2 p-2 text-base border rounded-md border-gray-300" />
      </label>
      <label className="flex flex-col text-lg">
        Descripción del curso:
        <textarea name="coure_description" value={courseData.coure_description} onChange={handleChange} required className="mt-2 p-2 text-base h-20 border rounded-md border-gray-300" />
      </label>
      <input type="submit" value="Crear Curso" className="px-4 py-2 text-lg text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-700" />
    </form>
  );
};

export default CoursesAdd;
