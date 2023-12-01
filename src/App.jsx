import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BookList from "./pages/BookList";
import BookCardDetail from "./pages/BookCardDetail";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookList" element={<BookList />} />
        <Route path="/bookList/:b_no" element={<BookCardDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
