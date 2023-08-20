// import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useSelector, useDispatch } from 'react-redux'
import { addBooking  } from '../features/booking/bookingSlice'

import { formatDate } from '../helpers/date.helper';

const TabOneContent = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.booking.selectedDate);

  // const [currentDate] = useState(new Date());
  // const [selectedDate, setSelectedDate] = useState(formatDate(currentDate));

  const handleDateChange = (date) => {
    const changedDate =  formatDate(date['$d']);
    dispatch(addBooking({ selectedDate: changedDate }));
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