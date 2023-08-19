import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import { useSelector, useDispatch } from 'react-redux'
// import { addBooking  } from '../features/booking/bookingSlice'

const TabOneContent = () => {

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentDate] = useState(new Date());
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  const [selectedDate, setSelectedDate] = useState(formattedDate);

  const handleDateChange = (date) => {
    setSelectedDate(JSON.stringify(date).substring(1, 11));
    // console.log('Selected Date:', selectedDate);
  };

  return (
    <div className='tab-content'>
      <div className="input-container">
        <input type="text" value={selectedDate} readOnly/>
      </div>
      <div className='calendar'>
        <p className="">
          When are you going?
        </p>
        <hr/>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar 
            date={selectedDate}
            onChange={handleDateChange}
          />
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

export default TabOneContent;