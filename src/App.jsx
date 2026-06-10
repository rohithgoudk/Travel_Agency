import { HashRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Components/Layouts/Mainlayout";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>

        {/* Layout Pages */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* Pages Without Header/Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Catch All Route */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </HashRouter>
  );
}

export default App;