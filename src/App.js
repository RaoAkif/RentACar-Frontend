import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import CarDetail from './pages/CarDetail';
import AddCar from './pages/AddCar';
import DeleteCar from './pages/DeleteCar';
import Rentals from './pages/Rentals';
import NewRental from './pages/NewRental';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/add_rental" element={<NewRental />} />
        <Route path="/car_detail/:id" element={<CarDetail />} />
        <Route path="/add_car" element={<AddCar />} />
        <Route path="/delete_car" element={<DeleteCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
