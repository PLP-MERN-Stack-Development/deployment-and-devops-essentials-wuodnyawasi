import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import "./components.css";

// Lazy load components for code splitting
const Home = lazy(() => import("./pages/Home"));
const AddBook = lazy(() => import("./pages/AddBook"));
const EditBook = lazy(() => import("./pages/Editbook"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main className="main-content">
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddBook />} />
              <Route path="/edit/:id" element={<EditBook />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
