import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Classes from './components/Classes'
import WebFund from './components/WebFund'
import JavaStack from './components/JavaStack'
import MernStack from './components/MernStack'
import PythonStack from './components/PythonStack'
import Contact from './components/Contact'

function App() {
  
  const location = useLocation(); 

  const hideFooterRoutes = [
    '/techcircle_dev/classes/web_funds',
    '/techcircle_dev/classes/java_stack',
    '/techcircle_dev/classes/mern_stack',
    '/techcircle_dev/classes/python_stack',
    // '/techcircle_dev/contact'
  ];


  return (
    <>
          <Nav/>
        <Routes>
          <Route path='/techcircle_dev' element={<HomePage/>}/>
          <Route path='/techcircle_dev/classes' element={<Classes/>}/>
          <Route path='/techcircle_dev/classes/web_funds' element={<WebFund/>}/>
          <Route path='/techcircle_dev/classes/java_stack' element={<JavaStack/>}/>
          <Route path='/techcircle_dev/classes/mern_stack' element={<MernStack/>}/>
          <Route path='/techcircle_dev/classes/python_stack' element={<PythonStack/>}/>
          <Route path='/techcircle_dev/contact' element={<Contact/>}/>
        </Routes>
        {/* Conditionally render Footer if the current route is not in the hideFooterRoutes array */}
        {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  )
}

export default App
