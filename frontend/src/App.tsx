import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetails";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import MainLayout from "./MainLayout";
import Feedback from "./pages/Feedback";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="book/:id" element={<BookDetail />} />
          <Route path="events" element={<Events />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="articles" element={<ArticlePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
