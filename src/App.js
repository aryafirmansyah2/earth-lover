import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Login from './pages/Login';
import LoginPckr from './pages/LoginPckr';
import Register from './pages/Register';
import RegisterPckr from './pages/RegisterPckr';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/picker' element={<LoginPckr />}></Route>
          <Route path='/register-picker' element={<RegisterPckr />}></Route>
          <Route path='*' element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;