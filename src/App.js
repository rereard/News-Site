import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Indonesia from './pages/indonesia/Indonesia';
import Programming from './pages/programming/Programming';
import Covid19 from './pages/covid19/Covid19';
import Saved from './pages/saved/Saved';
import Search from './pages/search/Search';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='flex justify-center'>
        <Routes>
          <Route path='/' element={<Indonesia/>}/>
          <Route path='/programming' element={<Programming/>}/>
          <Route path='/covid' element={<Covid19/>}/>
          <Route path='/saved' element={<Saved/>}/>
          <Route path='/search/:searchValue' element={<Search/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
