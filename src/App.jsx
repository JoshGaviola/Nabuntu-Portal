import SignInPage from './Pages/sign-in-page';
import Dashboard from './Pages/dash-board';
import Navbar from './Pages/components/navbar'; 
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
