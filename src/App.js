import { useEffect, useState } from "react";
import "./App.css";
import data from "./data.json";
import Footer from "./sections/Footer";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import HowPage from "./Pages/HowPage";
import TestimonialsPage from "./Pages/TestimonialsPage,js";

function App() {
  // Using state to store the data from the JSON file
  const [jsonData, setJsonData] = useState([]);

  // Using useEffect to load the data once the component mounts
  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <BrowserRouter>
      {/* <div className='App'> */}
      <Routes>
        <Route path='/' element={<Home data={jsonData} />} />
        <Route path='about' element={<AboutPage data={jsonData} />} />
        <Route
          path='testimonials'
          element={<TestimonialsPage data={jsonData} />}
        />
        <Route
          path='how-it-works'
          element={<HowPage data={jsonData} />}
        />
      </Routes>
      <Footer social={jsonData.social} links={jsonData.footerLinks} />
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
