import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';

// import { Toaster } from 'sonner';

function App() {
  return (
    <BrowserRouter>
      {/* <Toaster position="top-center" richColors /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
