import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Pages/Home'
import CoinPage from './Pages/CoinPage'
import { useEffect } from 'react'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/CoinPage/:id' exact render={(props) => <CoinPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;