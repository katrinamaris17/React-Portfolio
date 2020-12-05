import logo from './logo.svg';
import './App.css';
// can be added to app.js or index.js in src folder
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// See 19 - activity#22
function App() {
  return (
  <Router>
    <div>
    <Navbar/>
      <Route exact path="/" component={AboutMe} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>

  );
}

export default App;
