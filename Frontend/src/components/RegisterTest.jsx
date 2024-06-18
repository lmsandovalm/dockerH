import { useState } from "react";

export const RegisterTest = () => {
  const [testData, setTestData] = useState({
    name_test: "",
    description_test: ""
  });
  const [createdTest, setCreatedTest] = useState(null);
  const [error, setError] = useState(null);
  const [questionData, setQuestionData] = useState({
    question_name: "",
    question_description: "",
    test: ""
  });
  const [createdQuestion, setCreatedQuestion] = useState(null);
  const [answerData, setAnswerData] = useState({
    answer_question: "",
    question: "",
    name_style: ""
  });

  const handleChange = (e) => {
    setTestData({
      ...testData,
      [e.target.name]: e.target.value
    });
  };

  const handleQuestionChange = (e) => {
    setQuestionData({
      ...questionData,
      [e.target.name]: e.target.value
    });
  };

  const handleAnswerChange = (e) => {
    setAnswerData({
      ...answerData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous error
    try {
      console.log("Enviando datos:", testData); // Para depuración
      const response = await fetch("https://nodebackend-vv0e.onrender.com/api/v1/test/registerTest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testData),
      });
      console.log("Respuesta recibida:", response); // Para depuración
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en la respuesta del servidor");
      }
      const data = await response.json();
      setCreatedTest(data);
      setQuestionData({ ...questionData, test: data.id });
    } catch (error) {
      console.error("Error al crear el test:", error); // Para depuración
      setError(error.message);
    }
  };

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous error
    try {
      console.log("Enviando datos de la pregunta:", questionData); // Para depuración
      const response = await fetch("https://nodebackend-vv0e.onrender.com/api/v1/test/registerQuestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(questionData),
      });
      console.log("Respuesta recibida:", response); // Para depuración
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en la respuesta del servidor");
      }
      const data = await response.json();
      console.log("Pregunta creada:", data);
      setCreatedQuestion(data);
      setAnswerData({ ...answerData, question: data.id });
    } catch (error) {
      console.error("Error al crear la pregunta:", error); // Para depuración
      setError(error.message);
    }
  };

  const handleAnswerSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous error
    try {
      console.log("Enviando datos de la respuesta:", answerData); // Para depuración
      const response = await fetch("https://nodebackend-vv0e.onrender.com/api/v1/test/registerAnswerQuestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answerData),
      });
      console.log("Respuesta recibida:", response); // Para depuración
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en la respuesta del servidor");
      }
      const data = await response.json();
      console.log("Respuesta creada:", data);
      setAnswerData({
        answer_question: "",
        question: createdQuestion.id,
        name_style: ""
      });
      setCreatedQuestion(null); // Reset the created question to allow adding new questions
    } catch (error) {
      console.error("Error al crear la respuesta:", error); // Para depuración
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          <span style={{ color: '#333' }}>Nombre del test:</span>
          <input
            type="text"
            name="name_test"
            value={testData.name_test}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          <span style={{ color: '#333' }}>Descripción del test:</span>
          <textarea
            name="description_test"
            value={testData.description_test}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc', minHeight: '100px' }}
          />
        </label>
        <input
          type="submit"
          value="Crear Test"
          style={{ backgroundColor: '#007BFF', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}
        />
      </form>
      {error && <div style={{ color: 'red', marginTop: '20px' }}>Error: {error}</div>}
      {createdTest && (
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
          <h2 style={{ color: '#333' }}>Test Creado</h2>
          <p style={{ color: '#333' }}>ID del test: {createdTest.id}</p>
          <p style={{ color: '#333' }}>Nombre del test: {createdTest.name_test}</p>
          <p style={{ color: '#333' }}>Descripción del test: {createdTest.description_test}</p>

          {!createdQuestion ? (
            <form onSubmit={handleQuestionSubmit} style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px' }}>
                <span style={{ color: '#333' }}>Nombre de la pregunta:</span>
                <input
                  type="text"
                  name="question_name"
                  value={questionData.question_name}
                  onChange={handleQuestionChange}
                  required
                  style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </label>
              <label style={{ display: 'block', marginBottom: '10px' }}>
                <span style={{ color: '#333' }}>Descripción de la pregunta:</span>
                <textarea
                  name="question_description"
                  value={questionData.question_description}
                  onChange={handleQuestionChange}
                  required
                  style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc', minHeight: '100px' }}
                />
              </label>
              <input
                type="submit"
                value="Agregar Pregunta"
                style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}
              />
            </form>
          ) : (
            <form onSubmit={handleAnswerSubmit} style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px' }}>
                <span style={{ color: '#333' }}>Respuesta a la pregunta:</span>
                <input
                  type="text"
                  name="answer_question"
                  value={answerData.answer_question}
                  onChange={handleAnswerChange}
                  required
                  style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </label>
              <label style={{ display: 'block', marginBottom: '10px' }}>
                <span style={{ color: '#333' }}>Estilo de respuesta:</span>
                <input
                  type="text"
                  name="name_style"
                  value={answerData.name_style}
                  onChange={handleAnswerChange}
                  required
                  style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </label>
              <input
                type="submit"
                value="Agregar Respuesta"
                style={{ backgroundColor: '#17a2b8', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}
              />
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default RegisterTest;
