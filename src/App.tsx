import { Routes, Route } from "react-router-dom";
import Layout from "@/pages/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";

const App = () => {
  return (
    <div className="text-2xl text-secondary antialiased">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='services' element={<Services/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
