import "./App.css"; 
import { Routes, Route, Link } from "react-router-dom";
import LoanApplication from "@/pages/LoanApplication";
import LoanResultsPage from "@/pages/LoanResultsPage";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 p-4 md:p-10">
      <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 w-full max-w-3xl">
        <nav className="mb-8 flex justify-center space-x-8">
          <Link to="/" className="text-blue-600 font-bold hover:underline">Home</Link>
          <Link to="/results" className="text-blue-600 font-bold hover:underline">Loan Results</Link>
        </nav>
        <Routes>
          <Route path="/" element={<LoanApplication />} />
          <Route path="/results" element={<LoanResultsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;