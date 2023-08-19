import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import '../styles/flight.css'
import rocket from '../assets/Rocket.jpg'

const Flight = () => {

    const navigate = useNavigate();

    return ( 
      <>
        <Header />
        <div className="container">
            <div className="back-button">
                <div className="text-tags">O</div>
                <div className="text-tags">flight-details</div>
            </div>
            <div className="price">
                <div className="text-tags">Total</div>
                <div className="amount">40.00</div>
            </div>
            <div>
                <img class="image" src={rocket} alt="rocket"/>
            </div>
            <div className="flight-info">
                <div className="flight-path">
                    <div>
                        <div>Earth</div>
                        <div>21:30</div>
                        <div>Fri, 16 August</div>
                    </div>
                    <div>
                        <div>IMG</div>
                        <div>9h 25min</div>
                    </div>
                    <div>
                        <div>Venus</div>
                        <div>03:20</div>
                        <div>Mon, 10 May</div>
                    </div>
                </div>
                <hr className="line"/>
                <div className="flight-seat">
                    <div>Passenger</div>
                    <p>Jenny Simmens</p>
                    <div className="seat-info">
                        <div>
                            <p>Seat</p>
                            <p>D1</p>
                        </div>
                        <div>
                            <p>Class</p>
                            <p>Economy</p>
                        </div>
                        <div>
                            <p>Gate</p>
                            <p>41</p>
                        </div>
                    </div>
                </div>
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