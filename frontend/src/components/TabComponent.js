import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const TabComponent = ({ value, handleChange }) => {
  return (
    <div className='tabs'>
      <Box 
        sx={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center'
        }}
      >
        <Tabs 
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab sx={{color: "#7E7E7E"}} value="one" label="One Way" />
          <Tab sx={{color: "#7E7E7E"}} value="two" label="Round Trip" />
        </Tabs>
      </Box>
    </div>
  );
}

export default TabComponent;