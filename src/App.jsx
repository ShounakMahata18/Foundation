import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/auth" element={<AuthForm />} />
            </Routes>
        </Router>
    );
}

export default App;
