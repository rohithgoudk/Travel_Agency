import { HashRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Components/Layouts/Mainlayout";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <HashRouter>
      <Routes>

        {/* Layout Pages */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Pages Without Header/Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </HashRouter>
  );
}

export default App;