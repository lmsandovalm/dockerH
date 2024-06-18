import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { useContext, useEffect } from 'react';
import AuthProvider, { AuthContext } from './contexts/AuthProvider';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";
import AdminSidebar from "./components/AdminSidebar"; 
import Error404 from "./pages/auth/Error404";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import TestVAK from './components/TestVAK';
import UserCourses from './components/UserCourses';
import RegisterTest from './components/RegisterTest'; 

// Importamos los componentes de cursos y estudiantes
import CoursesList from './components/courses/CoursesList';
import CoursesAdd from './components/courses/CoursesAdd';
import CoursesDelete from './components/courses/CoursesDelete';
import UserAdd from './components/student/UserAdd';
import UserEdit from './components/student/UserEdit';
import UserDelete from './components/student/UserDelete';
import UserList from './components/student/UserList';

const ProtectedLayout = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log("User protected: ", user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // if (!user || !user.data || !user.data.user || !user.data.user.role) {
  if (!user || !user.role) {
    console.log("Sin datos de usuario");
    return null; // Or some loading indicator
  }

  return (
    <div className="flex h-screen">
      {user.role.name_role === 'admin' ? <AdminSidebar /> : <Sidebar />}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

ProtectedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Nuevas rutas agregadas */}
          <Route path="/admin/*" element={
            <ProtectedLayout>
              <Outlet />
            </ProtectedLayout>
          }>
            <Route path="AdminSidebar" element={<AdminSidebar />} />
            <Route path="AdminSidebar/RegisterTest" element={<RegisterTest />} />
            <Route path="courses/*" element={
              <>
                <CoursesList />
                <CoursesAdd />
                <CoursesDelete />
              </>
            } />
            <Route path="students/*" element={
              <>
                <UserAdd />
                <UserEdit />
                <UserDelete />
                <UserList />
              </>
            } />
          </Route>
          {/* Rutas existentes */}
          <Route path="/dashboard" element={<ProtectedLayout><Dashboard /></ProtectedLayout>} />
          <Route path="/testvak" element={<ProtectedLayout><TestVAK /></ProtectedLayout>} />
          <Route path="/profile" element={<ProtectedLayout><Profile /></ProtectedLayout>} />
          <Route path="/usercourses" element={<ProtectedLayout><UserCourses /></ProtectedLayout>} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;