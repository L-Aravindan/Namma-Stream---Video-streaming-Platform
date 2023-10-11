import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Video from "./pages/Video";
import Navbar from "./components/Navbar";

function App() {
  return( 
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/video/:id" element={<Video />} />

  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
