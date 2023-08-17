import React, { useState } from "react"
import '../styles/main.css'

import TabComponent from './TabComponent';
import TabOneContent from './TabOneContent';
import TabTwoContent from './TabTwoContent';

const Tab = () => {

    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const tabContent = value === 'two' ? <TabTwoContent /> : <TabOneContent />;

    return ( 
      <>
        <div className='tabs'>
            <TabComponent value={value} handleChange={handleChange} />
        </div>

        {/* tab content */}
        <div className='tab-content'>
            {tabContent}
        </div>  
      </>
     );
}
 
export default Tab;