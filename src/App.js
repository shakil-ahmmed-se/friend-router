import './App.css';
import Users from './components/Users/Users';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import UserDetails from './components/UserDetails/UserDetails';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>  
          <Route path='/home' element={<Home/>}/>
          <Route path='/users/:userId' element={<UserDetails/> }/>
          <Route path='*' element={<NoMatch/>}/> 
        </Routes>
      </Router>
    </div>
  
  );
}

export default App;
