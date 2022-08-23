import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRentals, deleteRental } from '../redux/rental/rentalsReducer';
import 'react-multi-carousel/lib/styles.css';
import CarCard from '../components/CarCard';
import './Rentals.css';

function Rentals() {
  const dispatch = useDispatch();
  const rentals = useSelector((store) => store.rental);

  useEffect(() => {
    dispatch(fetchRentals());
  }, [dispatch]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
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

  const handleDelete = (id) => {
    dispatch(deleteRental(id));
  };

  const emptyRentalsPage = <h2>You don&apos;t have any rentals yet</h2>;

  const rentalsPage = (
    <div className="rentals-main">
      <h2 className="title">RENTALS</h2>
      <Carousel responsive={responsive} className="rental-carousel-container" infinite>
        {rentals.map((rent) => (
          <div className="rentals-page" key={rent.id}>
            <CarCard
              key={rent.id}
              carName={rent.car.name}
              model={rent.car.model}
              price={rent.car.rent}
              image={rent.car.image}
              city={rent.city}
              date={rent.date}
            />
            <button className="btn btn-green" type="button" onClick={() => handleDelete(rent.id)}>Delete</button>
          </div>
        ))}
      </Carousel>
    </div>
  );

  if (rentals.length === 0) {
    return emptyRentalsPage;
  }

  return rentalsPage;
}

export default Rentals;
