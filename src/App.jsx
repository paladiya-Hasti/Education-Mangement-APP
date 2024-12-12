import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/Adminhome";
import TeacherDashboard from "./pages/Techerhome";
import Studenthome from "./pages/Studenthome"
import Login from "./pages/Login";
import Register from "./pages/Register";
import { DataProvider } from "./context/DataContext";
import {CourseProvider} from "./context/CourseContext"
function App() {
  return (
    <DataProvider>
      <CourseProvider>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register/*" element={<Register />} />
      <Route path="/admin/*" element={<AdminDashboard />} />
      <Route path="/teacher/*" element={<TeacherDashboard />} />
      <Route path="/student/*" element={<Studenthome />} />
    </Routes>
    </CourseProvider>
    </DataProvider>
   
  );
}
export default App;
