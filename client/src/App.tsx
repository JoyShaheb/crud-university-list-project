import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  University,
  UniversityDetails,
  Faculties,
  FacultyDetails,
  ErrorPage,
} from "./Pages";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universities" element={<University />} />
        <Route path="/universities/:id" element={<UniversityDetails />} />
        <Route path="/faculties" element={<Faculties />} />
        <Route path="/faculties/:id" element={<FacultyDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
