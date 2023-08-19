import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import '../styles/flight.css'
import '../styles/cards.css'
import bitcoin from '../assets/bitcoin.PNG'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Checkout = () => {

    const navigate = useNavigate();

    return ( 
      <>
        <Header />
        <div className="container">
            <div className="back-button">
                <div className="back-arrow">
                    <ArrowBackIosIcon 
                        onClick={() => {
                            navigate("/info");
                        }}
                    />
                </div>
                <div className="text-tags">Flight : Earth - Venus</div>
            </div>
            <div className="heading">
                <div className="text-tags">Earth to Venus</div>
                <div className="inner-text">2 Passengers Return Trip Business Class</div>
            </div>
            <div className="card">
                <hr className="line"/>
                <div className="date-container">
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
                    <div>AirTours</div>
                    <div>
                        <img src={bitcoin} alt="coin" />
                        <div>40.00</div>
                    </div>
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
                <div className="date-container">
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
                    <div>AirTours</div>
                    <div>
                        <img src={bitcoin} alt="coin" />
                        <div>40.00</div>
                    </div>
                </div>
                <div 
                    className="submit-button" 
                    onClick={() => {
                        navigate("/flight");
                    }}>
                    Check
                </div>
            </div>
            
            <div className="show-button">Show more results</div>
        </div>
      </>
     );
}
 
export default Checkout;