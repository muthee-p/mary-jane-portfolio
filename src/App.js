import './App.css';
import Reviews from './components/reviews';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    <nav>
    <Nav />
    
    </nav>
    
    
    <div className="body">
    <section className="home">
    <Home />
    </section>

    <section className="about">
    <About />
    </section>

    <section className="experience">
    <Experience />
    </section>

    <section className="work">
    <Work />
    </section>

    <section className="reviews">
    <Reviews />
    </section>

    
    <section className="contact">
    <Contact />
    </section>
      </div>
    </div>
  );
}

export default App;
