import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./sections/About";
import Header from "./sections/Header";
import Testimonial from "./sections/Testimonial";
import data from "./data.json";
import Contact from "./sections/Contact";
import Blogs from "./sections/Blogs";

function App() {
  // Using state to store the data from the JSON file
  const [jsonData, setJsonData] = useState([]);

  // Using useEffect to load the data once the component mounts
  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div className='App'>
      <Header />
      <Nav />
      <div className='clearfix'>...</div>
      <About />
      <Testimonial data={jsonData.testimonials} />
      <Contact />
      <Blogs />
    </div>
  );
}

export default App;
