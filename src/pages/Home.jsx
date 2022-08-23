import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/car/car';
import HomeCarCard from '../components/HomeCarCard';
import 'react-multi-carousel/lib/styles.css';
import './Home.css';

function Home() {
  const dispatch = useDispatch();
  const cars = useSelector((store) => store.car);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
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

  const emptyCarsPage = <h2>There are no cars available</h2>;

  const carsPage = (
    <div className="latest-models-main">
      <h2 className="title">LATEST&nbsp;&nbsp;MODELS</h2>
      <Carousel responsive={responsive} className="carousel-container" infinite>
        {cars.map((car) => (
          <div key={car.id}>
            <a href={`/car_detail/${car.id}`}>
              <HomeCarCard
                key={car.id}
                carName={car.name}
                model={car.model}
                price={car.rent}
                image={car.image}
                desc={car.desc}
              />
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );

  if (cars.length === 0) {
    return emptyCarsPage;
  }

  return carsPage;
}

export default Home;
