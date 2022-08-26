import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { RiFacebookFill, RiTwitterFill, RiWhatsappLine } from 'react-icons/ri';
import { GiCircle } from 'react-icons/gi';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'next-share';

import { fetchCars } from '../redux/car/car';
import HomeCarCard from '../components/HomeCarCard';
import 'react-multi-carousel/lib/styles.css';
import NotFound from './NotFound';
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
      items: 2,
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

  const msg = 'There are no cars available.';
  const emptyCarsPage = <NotFound msg={msg} />;

  const carsPage = (
    <div className="latest-models-main">
      <h2 className="title">LATEST&nbsp;&nbsp;MODELS</h2>
      <p className="subtitle">Please select a car to rent for a week</p>
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
            <div id="social-share">
              <FacebookShareButton
                url={'https://rent-a-car-frontend.netlify.app/car.id'}
                title={`Hi! Our brand new car ${car.name} is here. Book it now!`}
                hashtag="#capstone"
              >
                <div className="bg-circle">
                  <GiCircle className="sm-share-circle" />
                  <RiFacebookFill className="sm-share" />
                </div>
              </FacebookShareButton>
              <WhatsappShareButton
                url={'https://rent-a-car-frontend.netlify.app/car.id'}
                hashtag="#microverse_capstone"
                title={`Hi! Our brand new car ${car.name} is here. Book it now!`}
              >
                <div className="bg-circle">
                  <GiCircle className="sm-share-circle-wa" />
                  <RiWhatsappLine className="sm-share sm-share-wa" />
                </div>
              </WhatsappShareButton>
              <TwitterShareButton
                url={'https://rent-a-car-frontend.netlify.app/car.id'}
                hashtag="#microverse_capstone"
                title={`Hi! Our brand new car *${car.name}* is here. Book it now!`}
              >
                <div className="bg-circle">
                  <GiCircle className="sm-share-circle" />
                  <RiTwitterFill className="sm-share" />
                </div>
              </TwitterShareButton>
            </div>
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
