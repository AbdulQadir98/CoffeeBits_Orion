import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import '../styles/flight.css'
import rocket from '../assets/Rocket.jpg'
import flight from '../assets/flight.PNG'
import bitcoin from '../assets/bitcoin.PNG'
import { duration } from "../constants/constants";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { placeBooking } from '../services/booking.service.js'
import { useSelector } from 'react-redux';
import { calculateEndTime } from "../helpers/time-calculator.helper";
import { getLocationCode } from "../utils/location.utils";

const Flight = () => {

    const navigate = useNavigate();
    const selectedDate = useSelector((state) => state.booking.selectedDate); 
    const passenger = useSelector((state) => state.booking.passenger);
    const fromLocation = useSelector((state) => state.booking.from);
    const toLocation = useSelector((state) => state.booking.to);
    const launchTime = useSelector((state) => state.booking.launch);
    const price = useSelector((state) => state.booking.price);

    const handleSubmit = async (e) => {
        const departure = getLocationCode(fromLocation);
        const destination = getLocationCode(toLocation);

        const postData = {
            startingLocation: departure,
            endingLocation: destination,
            departureDate: selectedDate,
            oneway:true,
            passengers:passenger,
            launchTime: launchTime,
        };

        const setBooking = async () => {
            placeBooking(postData)
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              // console.error(error.response.data);
              console.log(error.message);
            });
        };
        setBooking();
      };
 
    const endTime = calculateEndTime(launchTime, duration);

    return ( 
      <>
        <Header />
        <div className="container">
            <div className="back-button">
                <div className="text-tags">
                    <ArrowBackIosIcon 
                        onClick={() => {
                            navigate("/checkout");
                        }}
                    />
                </div>
                <div className="text-tags">Flight Information</div>
            </div>
            <div className="price">
                <div className="text-tags">Total</div>
                <div className="amount">
                    <img src={bitcoin} alt="coin" />
                    <div>{price}.00</div>
                </div>
            </div>
            <div>
                <img className="image" src={rocket} alt="rocket"/>
            </div>
            <div className="flight-info">
                <div className="flight-path">
                    <div>
                        <span>{fromLocation}</span>
                        <div>{launchTime}</div>
                        <p>{selectedDate}</p>
                    </div>
                    <div className="flight-image">
                        <img src={flight} alt="flight" />
                        <p>{duration}</p>
                    </div>
                    <div>
                        <span>{toLocation}</span>
                        <div>{endTime}</div>
                        <p>{selectedDate}</p>
                    </div>
                </div>
                <hr className="line"/>
                <div className="flight-seat">
                    <div>Passenger</div>
                    <span>{passenger[0]['fullName']}</span>
                    <div className="seat-info">
                        <div>
                            <div>Seat</div>
                            <span>D1</span>
                        </div>
                        <div>
                            <div>Class</div>
                            <span>{passenger[0]['class']}</span>
                        </div>
                        <div>
                            <div>Gate</div>
                            <span>41</span>
                        </div>
                    </div>
                </div>
                <hr className="line"/>
            </div>
            <button 
                className="submit-button"
                onClick={() => {
                    handleSubmit();
                  }}
            >
                Confirm
            </button>
            <button 
                className="cancel-button"
                onClick={() => {
                    navigate("/");
                  }}
            >
                Cancel
            </button>
        </div>
      </>
     );
}
 
export default Flight;