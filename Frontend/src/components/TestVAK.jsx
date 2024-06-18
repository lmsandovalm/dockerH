import { useState, useEffect } from "react";

const TestVAK = ({ }) => {
  const [test, setTest] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Traemos los datos de la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://nodebackend-vv0e.onrender.com/api/v1/test/find/6654ba1fa74117fcf6db9b3e`
        );
        const result = await response.json();

        if (result.statusCode === 200) {
          setTest(result.data);
          console.log(result.data);
        } else {
          console.error('Error fetching data:', result.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, test.questions_test.length - 1));
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleFinishTest = () => {
    setIsFinished(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg">
        <h1 className="text-center text-2xl font-bold mb-4">Prueba</h1>
        {test ? (
          <div key={test._id} className="space-y-4">
            <h2 className="text-center text-xl font-semibold mb-2">{test.name_test}</h2>
            <p className="text-center text-gray-700 mb-4">{test.description_test}</p>
            {test.questions_test.length > 0 ? (
              <fieldset className="border border-gray-300 p-4 rounded-lg shadow-sm">
                <legend className="font-medium text-gray-900">{test.questions_test[currentQuestionIndex].question_name}</legend>
                <p className="mt-1 text-sm text-gray-700">{test.questions_test[currentQuestionIndex].question_description}</p>
                {test.questions_test[currentQuestionIndex].answers_question.length > 0 ? (
                  test.questions_test[currentQuestionIndex].answers_question.map((answer, aIndex) => (
                    <label
                      key={aIndex}
                      htmlFor={`Option${currentQuestionIndex}${aIndex}`}
                      className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 mt-2 transition hover:bg-gray-50">
                      <div className="flex items-center">
                        <input type="radio" className="size-4 rounded border-gray-300" id={`Option${currentQuestionIndex}${aIndex}`} name={`Question${currentQuestionIndex}`} />
                      </div>
                      <div>
                        <p className="font-semibold">{answer.answer_question}</p>
                        <p className="text-sm text-gray-600"><strong>Tipo de respuesta:</strong> {answer.answer_type}</p>
                      </div>
                    </label>
                  ))
                ) : (
                  <p className="mt-2 text-sm text-gray-600">No hay respuestas disponibles para esta pregunta.</p>
                )}
              </fieldset>
            ) : (
              <p className="text-center text-gray-700">No hay preguntas disponibles para esta prueba.</p>
            )}
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
              >
                Atrás
              </button>
              {currentQuestionIndex < test.questions_test.length - 1 ? (
                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Siguiente
                </button>
              ) : (
                <button
                  onClick={handleFinishTest}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg"
                >
                  Finalizar
                </button>
              )}
            </div>
            {isFinished && (
              <p className="text-center text-gray-700 mt-4">¡Prueba finalizada!</p>
            )}
          </div>
        ) : (
          <p className="text-center text-gray-700">Cargando prueba...</p>
        )}
      </div>
    </div>
  );
};

export default TestVAK;
