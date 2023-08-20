import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../features/booking/bookingSlice";
import { useNavigate } from "react-router-dom";
import "../styles/Info.css";
import { options } from "../constants/constants";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.booking.selectedDate);

  const [passengers, setPassengers] = useState([
    {
      fullName: "",
      age: "",
      gender: "male",
      class: options.class[0].value,
      food: options.food[0].value,
    },
  ]);

  const [from, setFrom] = useState("Earth");
  const [to, setTo] = useState("Venus");
  const [launch, setLaunch] = useState("10:00 AM");

  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index][field] = value;
    setPassengers(updatedPassengers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBooking({ selectedDate, passenger: passengers, from, to, launch }),
    );
    navigate("/checkout");
  };

  const handleAddPassenger = () => {
    setPassengers([
      ...passengers,
      {
        fullName: "",
        age: "",
        gender: "male",
        class: "",
        food: "",
      },
    ]);
  };

  return (
    <div className="middle">
      <form onSubmit={handleSubmit}>
        <div className="destination">
          <div className="drop-down">
            <label htmlFor="from">From</label>
            <br />
            <select
              id="from"
              name="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            >
              <option value="Earth">Earth</option>
              <option value="Venus">Venus</option>
              <option value="Saturn">Saturn</option>
              <option value="Moon">Moon</option>
            </select>
          </div>
          <div className="drop-down">
            <label htmlFor="to">To</label>
            <br />
            <select
              id="to"
              name="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              <option value="Earth">Earth</option>
              <option value="Venus">Venus</option>
              <option value="Saturn">Saturn</option>
              <option value="Moon">Moon</option>
            </select>
          </div>
        </div>

        <div className="traveler">
          <p>Traveller Information</p>
          {passengers.map((passenger, index) => (
            <div className="traveler-info" key={index}>
              <span>Passenger - {index + 1}</span>
              <div className="traveler-name">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={passenger.fullName}
                  onChange={(e) =>
                    handlePassengerChange(index, "fullName", e.target.value)
                  }
                />
              </div>
              <div className="more">
                <div className="drop-down">
                  <input
                    type="number"
                    placeholder="Age"
                    value={passenger.age}
                    onChange={(e) =>
                      handlePassengerChange(index, "age", e.target.value)
                    }
                  />
                </div>
                <div className="gender-radio">
                  <div>
                    <input
                      type="radio"
                      id={`male-${index}`}
                      name={`gender-${index}`}
                      value="male"
                      checked={passenger.gender === "male"}
                      onChange={() =>
                        handlePassengerChange(index, "gender", "male")
                      }
                    />
                    <label htmlFor={`male-${index}`}>Male</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id={`female-${index}`}
                      name={`gender-${index}`}
                      value="female"
                      checked={passenger.gender === "female"}
                      onChange={() =>
                        handlePassengerChange(index, "gender", "female")
                      }
                    />
                    <label htmlFor={`female-${index}`}>Female</label>
                  </div>
                </div>
              </div>
              <div className="destination">
                <div className="drop-down">
                  <label htmlFor={`class-${index}`}>Class</label>
                  <br />
                  <select
                    id={`class-${index}`}
                    name={`class-${index}`}
                    value={passenger.class}
                    onChange={(e) =>
                      handlePassengerChange(index, "class", e.target.value)
                    }
                  >
                    {options.class.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="drop-down">
                  <label htmlFor={`food-${index}`}>Food</label>
                  <br />
                  <select
                    id={`food-${index}`}
                    name={`food-${index}`}
                    value={passenger.food}
                    onChange={(e) =>
                      handlePassengerChange(index, "food", e.target.value)
                    }
                  >
                    {options.food.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}

          <div className="addPassenger" onClick={handleAddPassenger}>
            Add More Passengers
          </div>
        </div>

        <div className="launch">
          <p>Launch Time</p>
          <div className="launchTime">
            <button id="button-1" onClick={() => setLaunch("10:00 AM")}>
              10:00 AM
            </button>
            <button id="button-2" onClick={() => setLaunch("11:00 AM")}>
              11:00 AM
            </button>
            <button id="button-3" onClick={() => setLaunch("12:00 PM")}>
              12:00 PM
            </button>
            <button id="button-4" onClick={() => setLaunch("1:00 PM")}>
              1:00 PM
            </button>
          </div>
        </div>
        <div className="button-container">
          <button type="submit" className="submit-button">
            Continue
          </button>
          <button type="reset" className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
