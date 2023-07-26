import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Product from './Components/Product/Product';
import './App.css';

function App() {
  return (
    <>
       <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/product/:id' element={ <Product />} />
          </Routes>
          <Footer />
       </BrowserRouter>
    </>
  )
}

export default App
