import { Route, Routes } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Paginate from "./components/Paginate";
import Tailwind from "./components/Tailwind";
import Todo from "./components/Todo";
import Projects from "./components/Project";
import Report from "./pages/Report";

function About() {
  return <p>hello</p>;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/todo/:id" element={<Todo />} />
        <Route path="/pagination" element={<Paginate />} />
        <Route path="/" element={<Dashboard />}>
          <Route path="home" element={<Tailwind />} />
          <Route path="team" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="calendar" element={<Tailwind />} />
          <Route path="documents" element={<Projects />} />
          <Route path="reports" element={<Report />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
