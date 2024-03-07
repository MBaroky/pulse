import "./App.css";
import Nav from "./components/Nav";
import About from "./sections/About";
import Header from "./sections/Header";
import Testimonial from "./sections/Testimonial";

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <div class='clearfix'>...</div>
      <About />
      <Testimonial />
    </div>
  );
}

export default App;
