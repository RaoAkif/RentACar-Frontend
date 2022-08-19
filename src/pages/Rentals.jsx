import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRentals, deleteRental } from '../redux/rental/rentalsReducer';
import CarCard from '../components/CarCard';
import './Rentals.css';

function Rentals() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  const dispatch = useDispatch();
  const rentals = useSelector((store) => store.rental);

  useEffect(() => {
    dispatch(fetchRentals());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteRental(id));
  };

  const emptyRentalsPage = <h2>You don&apos;t have any rentals yet</h2>;

  const rentalsPage = (
  <Carousel responsive={responsive} className="carousel-container" infinite>
    <div>
      <h2 className="page-title">Rentals</h2>
      <div className="rentals">
        {rentals.map((rent) => (
          <div key={rent.id}>
            <CarCard
              key={rent.id}
              carName={rent.car.name}
              model={rent.car.model}
              price={rent.car.rent}
              image={rent.car.image}
              city={rent.city}
              date={rent.date}
            />
            <button type="button" onClick={() => handleDelete(rent.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
   </Carousel>
  );

  if (rentals.length === 0) {
    return emptyRentalsPage;
  }

  return rentalsPage;
}

export default Rentals;
