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
import AuthPage from "./pages/AuthPage";
import { Toaster } from "react-hot-toast";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
    setLoading(false);
  }, []);

  if (loading) return null; // Optional: Show a spinner here

  return (
    <Router>
      <Toaster position="top-center" />
      <Routes>
        {/* Public Routes */}
        {!isAuthenticated && (
          <>
           <Route path="/login" element={<AuthPage type="login" setAuth={setIsAuthenticated} />} />
            <Route path="/register" element={<AuthPage type="register" setAuth={setIsAuthenticated} />} />
            <Route path="*" element={<Navigate to="/register" replace />} />
          </>
        )}

        {/* Protected Routes */}
        {isAuthenticated && (
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="book/:id" element={<BookDetail />} />
            <Route path="events" element={<Events />} />
            <Route path="admin/gallery" element={<Gallery />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="articles" element={<ArticlePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
