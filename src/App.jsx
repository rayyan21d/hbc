import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import Book from './pages/Book'
import Buy from './pages/Buy'
import Recipt from './pages/Recipt'
function App() {
  

  return (
    <>
   
     <BrowserRouter>
      <Navbar/>
     <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/book" element={<Book />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/recipt" element={<Recipt />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
