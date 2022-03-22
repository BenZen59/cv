import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CV from './components/CV';
import Projet from './components/Projet';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CV />} />
          <Route path='/projet' element={<Projet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
