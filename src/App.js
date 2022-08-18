import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarDetail from './pages/CarDetail';
import AddCar from './pages/AddCar';
import DeleteCar from './pages/DeleteCar';
import Rentals from './pages/Rentals';
import NewRental from './pages/NewRental';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';

function App() {
  const requireAuth = (nextState, replace) => {
    if (!localStorage.getItem('user')) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    }
  };
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <section>
        <Routes>
          <Route path="/" element={<Home />} onEnter={requireAuth} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/car-detail/:id" element={<CarDetail />} onEnter={requireAuth} />
          <Route path="/add-car" element={<AddCar />} onEnter={requireAuth} />
          <Route path="/delete-car" element={<DeleteCar />} onEnter={requireAuth} />
          <Route path="/rentals" element={<Rentals />} onEnter={requireAuth} />
          <Route path="/new-rental" element={<NewRental />} onEnter={requireAuth} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
