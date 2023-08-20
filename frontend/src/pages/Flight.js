import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import '../styles/flight.css'
import rocket from '../assets/Rocket.jpg'
import flight from '../assets/flight.PNG'
import bitcoin from '../assets/bitcoin.PNG'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { getBooking } from '../services/booking.service.js'
import { useSelector } from 'react-redux';

const Flight = () => {

    const navigate = useNavigate();
    const selectedDate = useSelector((state) => state.booking.selectedDate); 
    const fromLocation = useSelector((state) => state.booking.from);
    const toLocation = useSelector((state) => state.booking.to);
    const launchTime = useSelector((state) => state.booking.launch);
    const passenger = useSelector((state) => state.booking.passenger);
 
    useEffect(() => {
        //Set this using the booking info
        let postData={
            "startingLocation": 2,
            "endingLocation": 1,
            "departureDate":"2023-08-17",
            "oneway":false,
            "returnDate":"2023-08-24"
            
        }
        const fetchFlights = async () => {
            getBooking(postData)
            .then(response => {
              console.log(response.data);
              
            })
            .catch(error => {
              // console.error(error.response.data);
              console.log(error.message);
            });
        };
        fetchFlights();
      }, []);
 
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
                    <div>40.00</div>
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
                        <p>9h 25min</p>
                    </div>
                    <div>
                        <span>{toLocation}</span>
                        <div>03:20 PM</div>
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
            <div className="submit-button">Confirm</div>
            <div 
                className="cancel-button"
                onClick={() => {
                    navigate("/");
                  }}
            >
                Cancel
            </div>
        </div>
      </>
     );
}
 
export default Flight;