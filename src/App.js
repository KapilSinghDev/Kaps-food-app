import React from 'react';
import { BrowserRouter,Route,Routes  } from 'react-router-dom';
import './App.scss';
import Homepage from './Components/Homepage';
import Firstpage from './Components/Firstpage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/Firstpage' element={<Firstpage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
