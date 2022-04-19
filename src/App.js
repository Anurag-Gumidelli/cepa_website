import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.scss';
import PageLayout from './components/PageLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CLientApp/>} />
        {/* 
        // TODO: Add admin part of the website for CEPA officers to edit contents
        <Route path='/admin' element={<AdminApp/>} />
        */}
      </Routes>
    </BrowserRouter>
  );
}

const CLientApp = () => {
  return (
    <PageLayout />
  )
}

export default App;
