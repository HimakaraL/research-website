import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Domain from "./pages/Domain";
import Milestones from "./pages/Milestones";
import Documents from "./pages/Documents";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Slides from "./pages/Slides";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/domain" element={<Domain />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/slides" element={<Slides />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}