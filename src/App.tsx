import { Routes, Route } from "react-router-dom";
import Layout from "@/pages/Layout";
import Home from "@/pages/Home";

const App = () => {
  return (
    <div className="text-2xl text-secondary antialiased">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
