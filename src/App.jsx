import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
       <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={ <Home /> } />
          </Routes>
          <Footer />
       </BrowserRouter>
    </>
  )
}

export default App
