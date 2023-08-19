// import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const TabOneContent = () => {

  // const handleSelect = (date) => {
  //   console.log("@@@", date)
  // };
  return (
    <div className='tab-content'>
      <div className="input-container">
        <input type="text" value="11 Oct 2022" readonly/>
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
      <div className="submit-button">Apply</div>
      <div className="cancel-button">Cancel</div>
    </div>
  );
}

export default TabOneContent;