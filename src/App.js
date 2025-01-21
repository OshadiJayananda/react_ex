import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary routing components
import Login from './Login'; 
import './App.css';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import Post from './Post';

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Post />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
