import './App.css';
import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Reviews from './components/reviews';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (

    <Router>
        {/*<ScrollToTop />*/}
    <nav>
    <Nav />
    </nav>
    
    <Switch>
      <Route exact path="/">
        
        <section className="home">
        <Home />
        </section>
        
      </Route>

      <Route  path="/about">
        <section className="about">
    <About />
    </section>
      </Route>

      <Route  path="/about">
        <About />
      </Route>
      <Route  path="/experience">
        <section className="experience">
        <Experience />
        </section>
      </Route>

      <Route  path="/work">
        <section className="work">
        <Work />
        </section>
      </Route>

      <Route  path="/reviews">
         <section className="reviews">
        <Reviews />
        </section>
      </Route>

      <Route  path="/contact">
         <section className="contact">
        <Contact />
        </section>
      
      </Route>
    </Switch>

    </Router>
 
  );
}

export default App;
