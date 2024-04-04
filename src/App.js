import React from 'react';
import { BrowserRouter as Router,} from 'react-router-dom';
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Home/>
      </div>
    </Router>
  );
}

export default App;