import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCarDetails } from '../redux/car/detail';
import './CarDetail.css';

function CarDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const car = useSelector((store) => store.carDetail);

  useEffect(() => {
    dispatch(fetchCarDetails(id));
  }, [dispatch]);

  const redirectHandler = () => {
    navigate('/add_rental');
  };

  return (
    <div className="car-detail">
      <div className="details-image-div">
        <img className="details-image" src={car.image} alt={car.name} />
      </div>

      <div className="car-info">
        <h3>{car.name}</h3>

        <table className="table table-striped table-bordered details-table">
          <tbody>
            <tr>
              <td className="text-start"><span>Model:</span></td>
              <td className="text-end">{car.model}</td>
            </tr>
            <tr>
              <td className="text-start"><span>Rent:</span></td>
              <td className="text-end">{car.rent}</td>
            </tr>
          </tbody>
        </table>

        <p className="car-desc">{car.desc}</p>
        <button className="btn btn-green" id="form-btn-cd" type="button" onClick={redirectHandler}>Rent</button>
      </div>
    </div>
  );
}

export default CarDetail;
