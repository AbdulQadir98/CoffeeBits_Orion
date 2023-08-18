import Header from "../components/Header";
import '../styles/flight.css'
import rocket from '../assets/Rocket.jpg'

const Flight = () => {
    return ( 
      <>
        <Header />
        <div className="container">
            <div className="back-button">
                <div className="text-tags">o</div>
                <div className="text-tags">flight-details</div>
            </div>
            <div className="price">
                <div className="text-tags">Total</div>
                <div className="amount">40.00</div>
            </div>
            <div>
                <img class="image" src={rocket} alt="rocket"/>
            </div>
            <div className="submit-button">Confirm</div>
            <div className="cancel-button">Cancel</div>
        </div>
      </>
     );
}
 
export default Flight;