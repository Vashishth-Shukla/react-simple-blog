import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>  {/* Updated from Switch to Routes */}
            <Route path="/" element={<Home />} />  {/* Updated Route syntax */}
            <Route path="/create" element={<Create />} /> {/* Updated Route syntax */}
            <Route path="/blogs/:id" element={<BlogDetails />} /> {/* Updated Route syntax */}
            <Route path="*" element={<NotFound />} /> {/* Updated Route syntax */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
