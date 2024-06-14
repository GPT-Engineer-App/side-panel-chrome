import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SidePanel from "./pages/SidePanel.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/side-panel" element={<SidePanel />} />
      </Routes>
    </Router>
  );
}

export default App;
