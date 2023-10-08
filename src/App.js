import Register from './Register';
import Login from './Login';
import { Home } from './Home';
import { Booking } from './Booking';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="Login" element={<Login></Login>}></Route>
        <Route path="Register" element={<Register></Register>}></Route>
        <Route path="Home" element={<Home></Home>}></Route>
        <Route path="Booking" element={<Booking></Booking>}></Route>
      </Routes>
    </main>
  );
}

export default App;
