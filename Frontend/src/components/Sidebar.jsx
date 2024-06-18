import { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiDashboardLine,
  RiUser3Line,
  RiSettings3Line,
  RiBook2Line,
  RiLogoutCircleRLine,
  RiArrowRightSLine,
  RiMenu3Line,
  RiCloseLine,
  RiRobotLine
} from "react-icons/ri";
import Chatbot from "./Chatbot";

function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      <div className={`xl:h-[100vh] fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-custom-blue p-6 flex flex-col justify-between z-50 ${showMenu ? "left-0" : "-left-full"} transition-all`}>
        <div className="flex items-center gap-4 mb-20">
          <img
            src="/src/assets/image/logo.jpg"
            alt="Sidebar Logo"
            className="h-8 w-8 object-cover rounded-full" />
          <h1 className="text-2xl font-bold text-white">IAprendix</h1>
        </div>
        <ul className="flex-1">
          <li>
            <Link to="/TestVAK" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-white">
              <RiDashboardLine className="text-primary" /> Test VAK
            </Link>
          </li>
          <li>
            <Link to="/Profile" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-white">
              <RiUser3Line className="text-primary" /> Perfil
            </Link>
          </li>
          <li>
            <Link to="/UserCourses" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-white">
              <RiBook2Line className="text-primary" /> Cursos
            </Link>
          </li>
          <li>
            <button onClick={() => setShowSubmenu(!showSubmenu)} className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-white">
              <span className="flex items-center gap-4">
                <RiSettings3Line className="text-primary" /> Configuración
              </span>
              <RiArrowRightSLine className={`mt-1 ${showSubmenu && "rotate-90"} transition-transform`} />
            </button>
            <ul className={`ml-8 ${showSubmenu ? "h-auto" : "h-0"} overflow-y-hidden transition-all`}>
              <li className="my-2">
                <Link to="/account" className="py-2 px-4 border-l border-gray-600 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-4 before:top-1/2 before:-translate-y-1/2 hover:text-white transition-colors">Cuenta</Link>
              </li>
              <li className="my-2">
                <Link to="/privacy" className="py-2 px-4 border-l border-gray-600 block relative before:w-3 before:h-3 before:absolute before:bg-gray-600 before:rounded-full before:-left-4 before:top-1/2 before:-translate-y-1/2 hover:text-white transition-colors">Privacidad</Link>
              </li>
            </ul>
          </li>
          <li>
            <button onClick={() => setShowChatbot(!showChatbot)} className="w-full flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-white">
              <RiRobotLine className="text-primary" /> IAprendix
            </button>
          </li>
        </ul>
        <nav className="mt-8">
          <Link to="/Logout" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-white">
            <RiLogoutCircleRLine className="text-primary" /> Cerrar sesión
          </Link>
        </nav>
      </div>
      <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50">{showMenu ? <RiCloseLine /> : <RiMenu3Line />}</button>
      {showChatbot && <Chatbot />}
    </>
  );
}

export default Sidebar;
