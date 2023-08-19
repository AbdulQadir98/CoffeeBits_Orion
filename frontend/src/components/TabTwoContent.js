// import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


const TabTwoContent = () => {

  const navigate = useNavigate();

  // const handleSelect = (date) => {
  //   console.log("@@@", date)
  // };

  return (
    <div className='tab-content'>
      <div className="input-container">
        <input type="text" value="11 Oct 2022 - 11 Nov 2022" readOnly/>
      </div>
      
      <div className='calendar'>
        <p className="">
          When are you going?
        </p>
        <hr />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </div>
      <div className='calendar'>
        <p className="">
          When do you return?
        </p>
        <hr />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </div>
      <div 
        className="submit-button" 
        onClick={() => {
          navigate("/info");
        }}>
        Apply
      </div>
      <div className="cancel-button">Cancel</div>
    </div>
  );
}

export default TabTwoContent;