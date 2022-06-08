import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Restaurants from './components/Restaurants';
import Restaurant from './components/Restaurant';
import Header from './components/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={ < Restaurants /> } />
            <Route path="/:id" element= { < Restaurant /> } />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
