import { Routes, Route } from "react-router-dom";
import Layout from "@/pages/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

const App = () => {
  return (
    <div className="text-2xl text-secondary antialiased">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
