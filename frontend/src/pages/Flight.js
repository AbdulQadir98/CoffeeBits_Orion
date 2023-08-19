import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import '../styles/flight.css'
import rocket from '../assets/Rocket.jpg'
import flight from '../assets/flight.PNG'
import bitcoin from '../assets/bitcoin.PNG'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Flight = () => {

    const navigate = useNavigate();

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
                <img class="image" src={rocket} alt="rocket"/>
            </div>
            <div className="flight-info">
                <div className="flight-path">
                    <div>
                        <span>Earth</span>
                        <div>21:30</div>
                        <p>Fri, 16 August</p>
                    </div>
                    <div className="flight-image">
                        <img src={flight} alt="flight" />
                        <p>9h 25min</p>
                    </div>
                    <div>
                        <span>Venus</span>
                        <div>03:20</div>
                        <p>Mon, 10 May</p>
                    </div>
                </div>
                <hr className="line"/>
                <div className="flight-seat">
                    <div>Passenger</div>
                    <span>Jenny Simmens</span>
                    <div className="seat-info">
                        <div>
                            <div>Seat</div>
                            <span>D1</span>
                        </div>
                        <div>
                            <div>Class</div>
                            <span>Economy</span>
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