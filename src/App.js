import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login'
import AuthProvider from './context/auth';
import Profile from "./pages/Profile"
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
