import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary routing components
import Login from './Login'; 
import './App.css';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import Post from './Post';
import SignIn from './SignIn';
import Book from './Book';

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/addPost" element={<Post />} />
          <Route path="/addBook" element={<Book />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
