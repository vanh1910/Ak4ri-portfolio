import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element = {<Home/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App