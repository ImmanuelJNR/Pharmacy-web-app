
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { AnimatePresence } from 'framer-motion';

import * as Sentry from '@sentry/react'
import '.././src/scss/style.scss'



function App() {
  // return  ;
  return (
    <>
      {/* <Route path="/"  element={Hero} />  */}
      <AnimatePresence>
        <Routes>
          <Route path="/"  element={<Home/>} /> 
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
      
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default Sentry.withProfiler(App);
