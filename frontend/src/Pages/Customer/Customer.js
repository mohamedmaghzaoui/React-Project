//import dependencies
import { useState, useEffect } from "react";
import axios from "axios";
//customer component
export const Customer = () => {
//server url
  const url = "http://localhost:8000/test";
  //useState initialize to null
  const [TestData, SetTestData] = useState(null);
  //get data from symfony server
  async function fetchData() {
    try {
      const apiResponse = await axios.get(url);
      SetTestData(apiResponse.data.test);
    } catch (error) {
      console.error("Error:", error);
    }
  }

//useffect hook 
  useEffect(() => {
    // Use useEffect to make the API request when the component mounts
    
    fetchData(); // Call the fetchData function
  }, []); // The empty array [] ensures the effect runs once on component mount

  return (
    //display data
    <div>
      <h1>Customer</h1>
     
    
      {TestData && (
        TestData.map((value)=>
        <div>
            <p>{value.name}</p>
            <p>{value.age}</p>
        </div>
      
        
        
        )
      )}
    </div> );
};
