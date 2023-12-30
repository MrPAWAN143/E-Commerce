import logo from './componentes/assest/images/logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import Home from './componentes/Home';
import Interiors from './componentes/Interiors';
import DesignIdeas from './componentes/Design-Ideas';
import Magazine from './componentes/ Magazine';
import Cities from './componentes/Cities';
import StoreLocator from './componentes/ Store-Locator';
import More from './componentes/More';
import UrlPage from './componentes/UrlPage';
import NotFound from './componentes/NotFound';
import Product from './componentes/Product';

function App() {
  return (
    <>

      <Router>
        <nav className="navbar navbar-expand">
          <div className="container">
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" />
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/interiors" className="nav-link">
                    Interiors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/design-ideas" className="nav-link">
                    Design Ideas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/magazine" className="nav-link">
                    Magazine
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cities" className="nav-link">
                    Cities
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/store-locator" className="nav-link">
                    Store Locator
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/more" className="nav-link">
                    More
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/interiors' element={<Interiors/>} ></Route>
          <Route path='/design-ideas' element={<DesignIdeas/>} ></Route>
          <Route path='/magazine' element={<Magazine/>}></Route>
          <Route path='/cities' element={<Cities/>}></Route>
          <Route path='/store-locator' element={<StoreLocator/>}></Route>
          <Route path='/more' element={<More/>}></Route>
          <Route path='#' element={<NotFound/>}></Route>
          <Route path='/:urlpage' element={<UrlPage/>}></Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
