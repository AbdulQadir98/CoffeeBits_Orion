import React, { useState } from "react"
import '../styles/main.css'

import Header from "../components/Header";
import TabComponent from '../components/TabComponent';
import TabOneContent from "../components/TabOneContent";
import TabTwoContent from "../components/TabTwoContent";

const Home = () => {

  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return ( 
    <>  
       <Header />
       <TabComponent value={value} handleChange={handleChange} />
       { value === "two" ? 
         <TabTwoContent /> : <TabOneContent /> 
       }
    </>
   );
}
 
export default Home;