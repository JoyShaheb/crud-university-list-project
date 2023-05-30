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
      <div className="container mx-auto px-2 lg:px-4 my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universities" element={<University />} />
          <Route path="/universities/:id" element={<UniversityDetails />} />
          <Route path="/faculties" element={<Faculties />} />
          <Route path="/faculties/:id" element={<FacultyDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
