import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

const Home = lazy(() => import('./routes/Home/Home'));
const Projects = lazy(() => import('./routes/Projects/Projects'));
const About = lazy(() => import('./routes/About/About'));
const Hobbies = lazy(() => import('./routes/Hobbies/Hobbies'));

const LoadingFallback = () => <div className="flex items-center justify-center min-h-screen">Loading...</div>;

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <div className = "dark:bg-gray-800 min-h-screen">
          <Navbar/>
          <main className = "dark:bg-gray-800">
            <Routes>
              <Route path="/" element = {<Home/>}/>
              <Route path="/projects" element = {<Projects/>}/>
              <Route path="/about" element = {<About/>}/>
              <Route path="/hobbies" element = {<Hobbies/>}/>
            </Routes>
          </main>
          <Footer/>
        </div>
      </Suspense>
    </Router>
  )
}

export default App