import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/flight.css";
import "../styles/cards.css";
import bitcoin from "../assets/bitcoin.PNG";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { addBooking } from "../features/booking/bookingSlice";
import { useDispatch, useSelector } from "react-redux";
import { serviceProvider } from "../constants/constants";
import { getFlights } from "../services/booking.service.js";
import { getLocationCode } from "../utils/location.utils";

const Slots = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.booking.selectedDate);
  const fromLocation = useSelector((state) => state.booking.from);
  const toLocation = useSelector((state) => state.booking.to);
  const launchTime = useSelector((state) => state.booking.launch);
  const passenger = useSelector((state) => state.booking.passenger);

  const [flights, setFlights] = useState(null);

  useEffect(() => {
    const departure = getLocationCode(fromLocation);
    const destination = getLocationCode(toLocation);

    const postData = {
      startingLocation: departure,
      endingLocation: destination,
      departureDate: selectedDate,
    };

    const fetchFlights = async () => {
      getFlights(postData)
        .then((response) => {
          console.log("Available flights", response.data);
          setFlights(response.data);
        })
        .catch((error) => {
          // console.error(error.response.data);
          console.log(error.message);
        });
    };
    fetchFlights();
  }, [fromLocation, toLocation, selectedDate]);

  const handleCheck = (e, price) => {
    e.preventDefault();
    dispatch(
      addBooking({
        selectedDate,
        passenger: passenger,
        from: fromLocation,
        to: toLocation,
        launch: launchTime,
        price,
      }),
    );
    navigate("/flight");
  };
  return (
    <div className="container">
      <div className="back-button">
        <div className="back-arrow">
          <ArrowBackIosIcon
            onClick={() => {
              navigate("/info");
            }}
          />
        </div>
        <div className="text-tags">
          Flight : {fromLocation} - {toLocation}
        </div>
      </div>
      <div className="heading">
        <div className="text-tags">
          {fromLocation} to {toLocation}
        </div>
        <div className="inner-text">
          flights avaliable for {passenger.length} Passengers
        </div>
      </div>

      {flights &&
        flights.oneWay.map((flight, index) => (
          <div className="card">
            <hr className="line" />
            <div className="date-container">
              <div className="inner-input">
                <div className="inner-text">from</div>
                <div>{fromLocation}</div>
              </div>
              <div className="inner-input">
                <SwapHorizIcon />
              </div>
              <div className="inner-input">
                <div className="inner-text">to</div>
                <div>{toLocation}</div>
              </div>
            </div>
            <div className="provider">
              <div>{serviceProvider}</div>
              <div>
                <img src={bitcoin} alt="coin" />
                <div>{flight.amount}.00</div>
              </div>
            </div>
            <div
              className="check-button"
              onClick={(e) => {
                handleCheck(e, flight.amount);
              }}
            >
              Check
            </div>
          </div>
        ))}
      <div className="show-button">Show more results</div>
    </div>
  );
};

export default Slots;
