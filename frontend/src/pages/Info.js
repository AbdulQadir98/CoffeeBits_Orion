import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Info.css";

const Info = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Header />
      <div className="middle">
        <form>
          <div className="destination">
            <div className="from">
              <label for="fname">From</label>
              <br />
              <select id="fname" name="fname">
                <option value="Saturn">Saturn</option>
                <option value="Earth">Earth</option>
                <option value="Venus">Venus</option>
                <option value="Moon">Moon</option>
              </select>
            </div>
            <div className="to">
              <label for="fname">To</label>
              <br />
              <select id="fname" name="fname">
                <option value="Saturn">Saturn</option>
                <option value="Earth">Earth</option>
                <option value="Venus">Venus</option>
                <option value="Moon">Moon</option>
              </select>
            </div>
          </div>

          <div className="traveler">
            <p>Traveller Information</p>
            <div className="traveler-info">
              <span>Passenger - 1</span>
              <div className="traveler-name">
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="more">
                <div className="age">
                  <input type="number" placeholder="Age" />
                </div>
                <div className="gender">
                  <div>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label for="male">Male</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                    />
                    <label for="female">Female</label>
                  </div>
                </div>
              </div>
              <div className="destination">
                <div className="from">
                  <label for="spacerClass">Class</label>
                  <br />
                  <select id="spacerClass" name="class">
                    <option value="busssiness">Bussiness Class</option>
                    <option value="economy">Economy Class</option>
                    <option value="first">First Class</option>
                  </select>
                </div>
                <div className="to">
                  <label for="food">Food</label>
                  <br />
                  <select id="food" name="food">
                    <option value="veg">Veg</option>
                    <option value="nonveg">Non-Veg</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="traveler-info">
              <span>Passenger - 2</span>
              <div className="traveler-name">
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="more">
                <div className="age">
                  <input type="number" placeholder="Age" />
                </div>
                <div className="gender">
                  <div>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label for="male">Male</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                    />
                    <label for="female">Female</label>
                  </div>
                </div>
              </div>
              <div className="destination">
                <div className="from">
                  <label for="spacerClass">Class</label>
                  <br />
                  <select id="spacerClass" name="class">
                    <option value="busssiness">Bussiness Class</option>
                    <option value="economy">Economy Class</option>
                    <option value="first">First Class</option>
                  </select>
                </div>
                <div className="to">
                  <label for="food">Food</label>
                  <br />
                  <select id="food" name="food">
                    <option value="veg">Veg</option>
                    <option value="nonveg">Non-Veg</option>
                  </select>
                </div>
              </div>
            </div>

            <button className="addPassenger" onClick={handleClick}>
              Add More Passengers
            </button>
          </div>

          <div className="launch">
            {/* <span className="sub">Launch Time</span> */}
            <p>Launch Time</p>
            <div className="launchTime">
              <button>10:00 AM</button>
              <button>10:00 AM</button>
              <button>10:00 AM</button>
              <button>10:00 AM</button>
            </div>
          </div>
          <div className="button-container">
            <div
              className="submit-button"
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Continue
            </div>
            <div className="cancel-button">Cancel</div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Info;
