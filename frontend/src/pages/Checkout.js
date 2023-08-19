import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import '../styles/flight.css'
import '../styles/cards.css'

const Checkout = () => {

    const navigate = useNavigate();

    return ( 
      <>
        <Header />
        <div className="container">
            <div className="back-button">
                <div className="text-tags">o</div>
                <div className="text-tags">Flight : Earth - Venus</div>
            </div>
            <div className="price">
                <div className="text-tags">Earth to Venus</div>
                <div className="text-tags">2 Passengers Return Trip Business Class</div>
            </div>
            <div className="card">
                <hr className="line"/>
                <div className="input-container">
                    <div className="inner-input">
                        <div className="inner-text">from</div>
                        <div>Earth</div>
                    </div>
                    <div className="inner-input">=</div>
                    <div className="inner-input">
                        <div className="inner-text">to</div>
                        <div>Venus</div>
                    </div>
                </div>
                <div className="provider">
                    <div className="amount">AirTours</div>
                    <div className="amount">40.00</div>
                </div>
                <div 
                    className="submit-button" 
                    onClick={() => {
                        navigate("/flight");
                    }}>
                    Check
                </div>
            </div>
            <div className="card">
                <hr className="line"/>
                <div className="input-container">
                    <div className="inner-input">
                        <div className="inner-text">from</div>
                        <div>Earth</div>
                    </div>
                    <div className="inner-input">=</div>
                    <div className="inner-input">
                        <div className="inner-text">to</div>
                        <div>Venus</div>
                    </div>
                </div>
                <div className="provider">
                    <div className="amount">AirTours</div>
                    <div className="amount">40.00</div>
                </div>
                <div 
                    className="submit-button" 
                    onClick={() => {
                        navigate("/flight");
                    }}>
                    Check
                </div>
            </div>
            
            <div className="cancel-button">Show more results</div>
        </div>
      </>
     );
}
 
export default Checkout;