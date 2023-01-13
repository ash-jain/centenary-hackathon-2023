import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Auth from './components/Auth';
import Services from './components/Services';
import Events from './components/Events';
import About from './components/About';
import Footer from './components/Footer';

import './styles/Header.scss';
import './styles/App.scss';
import './styles/Auth.scss';
import './styles/Footer.scss';
import './styles/mediaquery.scss';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/login' element={ <Auth/> } />
          <Route path='/services' element={ <Services/> } />
          <Route path='/events' element={ <Events /> } />
          <Route path='/about' element={ <About /> } />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
