import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CarDetail from './pages/CarDetail';
import AddCar from './pages/AddCar';
// import DeleteCar from './pages/DeleteCar';
import Rentals from './pages/Rentals';
// import NewRental from './pages/NewRental';

function App() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car-detail/:id" element={<CarDetail />} />
          <Route path="/add-car" element={<AddCar />} />
          {/* <Route path="/delete-car" element={<DeleteCar />} /> */}
          <Route path="/rentals" element={<Rentals />} />
          {/* <Route path="/new-rental" element={<NewRental />} /> */}
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
