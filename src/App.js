import "./App.css";
import Nav from "./components/Nav";
import About from "./sections/About";
import Header from "./sections/Header";

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <About />
    </div>
  );
}

export default App;
