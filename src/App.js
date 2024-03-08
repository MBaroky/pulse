import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./sections/About";
import Header from "./sections/Header";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Blogs from "./sections/Blogs";
import Brands from "./sections/Brands";

import data from "./data.json";
import Footer from "./sections/Footer";

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
      <Blogs data={jsonData.blog} />
      <Brands data={jsonData.brands} />
      <div className='clearfix'>...</div>
      <Footer social={jsonData.social} links={jsonData.footerLinks} />
    </div>
  );
}

export default App;
