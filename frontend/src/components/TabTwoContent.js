// import 'react-date-range/dist/styles.css';
// import 'react-date-range/dist/theme/default.css';
// import { Calendar } from 'react-date-range';


const TabTwoContent = () => {

  // const handleSelect = (date) => {
  //   console.log("@@@", date)
  // };

  return (
    <div className='tab-content'>
      <div class="input-container">
        <input type="text" value="11 Oct 2022 - 11 Nov 2022" readonly/>
      </div>
      <div className='calendar'>
        {/* <Calendar
          date={new Date()}
          onChange={handleSelect}
        /> */}
      </div>
      <div className='calendar'>
        {/* <Calendar
          date={new Date()}
          onChange={handleSelect}
        /> */}
      </div>
      <div class="submit-button">Apply</div>
      <div class="cancel-button">Cancel</div>
    </div>
  );
}

export default TabTwoContent;