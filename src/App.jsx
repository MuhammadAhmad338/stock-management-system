import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import SingleImage from './Components/Main/SingleImage';
import Footer from './Components/Footer/Footer';
import './App.css';
import MultipleImage from './Components/Main/MultipleImage';

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
