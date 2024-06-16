import { Route, BrowserRouter, Routes,} from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Components/Signup';
import Landing from './Components/Landing';
import { useState } from 'react';

function App() {
  const [users,setUsers] =useState(
    [    {
            username: "jeru",
            password:"123",
            
        }]
    )
  return (
    <div>
        <BrowserRouter>
            {/* <nav>
                <Link to='/login'>Login</Link> <p></p>
                <Link to='/signup'>Sign up</Link><p></p>
                <Link to='/'>App</Link>
            </nav> */}
            <Routes>
                <Route path='/' element={<Login users={users}/>} />
                <Route path='/signup' element={<Signup users={users} setUsers={setUsers}/>} />
                <Route path='/landing' element={<Landing />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
