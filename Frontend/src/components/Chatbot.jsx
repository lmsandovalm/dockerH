import { useState } from "react";
import { RiSendPlane2Line } from "react-icons/ri";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, user: true }];
      setMessages(newMessages);
      setInput("");

      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4",
            messages: newMessages.map((message) => ({
              role: message.user ? "user" : "assistant",
              content: message.text,
            })),
          }),
        });

        const data = await response.json();
        const botResponse = data.choices[0].message.content;

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, user: false },
        ]);
      } catch (error) {
        console.error("Error al enviar el mensaje:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Error al obtener la respuesta del chatbot.", user: false },
        ]);
      }
    }
  };

  return (
    <div>
      <button
        className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-14 h-14 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 p-0 normal-case leading-5 hover:text-gray-900"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        data-state="closed"
        onClick={() => {
          document.getElementById("chat-window").classList.toggle("hidden");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white block border-gray-200 align-middle"
        >
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
        </svg>
      </button>

      <div
        id="chat-window"
        className="fixed bottom-4 right-20 bg-white p-4 rounded-lg border border-gray-200 w-80 h-108 hidden"
        style={{ boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)" }}
      >
        <div className="flex flex-col space-y-1.5 pb-4">
          <h2 className="font-semibold text-lg tracking-tight">IAprendix</h2>
          <p className="text-sm text-gray-500 leading-3">Powered by ChatGpt</p>
        </div>

        <div className="pr-2 h-72 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 my-2 text-gray-600 text-sm ${
                message.user ? "self-end" : "self-start"
              }`}
            >
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-6 h-6">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    ></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed">
                <span className="block font-bold text-gray-700">{message.user ? "You" : "AI"} </span>
                {message.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center pt-2">
          <form
            className="flex items-center justify-center w-full space-x-2"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <input
              className="flex h-10 w-full rounded-md border border-gray-200 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-50 text-gray-900 focus-visible:ring-offset-2"
              placeholder="Type your message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium text-white disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-gray-800 h-10 px-4 py-2"
              type="submit"
            >
              <RiSendPlane2Line />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
