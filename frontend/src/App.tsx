import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetails";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import MainLayout from "./MainLayout";
import Feedback from "./pages/Feedback";
import ArticlePage from "./pages/ArticlePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // ❗ Start as null
  const [loading, setLoading] = useState(true); // 🔄 Handle initial loading

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
    setLoading(false); // ✅ Done checking
  }, []);

  if (loading) return null; // Or return a nice loader here

  return (
    <Router>
      <Toaster position="top-center" />
      <Routes>
        {/* Public Routes */}
        {!isAuthenticated && (
          <>
            <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
            <Route path="/register" element={<Register />} />
          </>
        )}

        {/* Protected Routes */}
        {isAuthenticated ? (
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="book/:id" element={<BookDetail />} />
            <Route path="events" element={<Events />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="articles" element={<ArticlePage />} />
          </Route>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/register" replace />} />
            <Route path="*" element={<Navigate to="/register" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
