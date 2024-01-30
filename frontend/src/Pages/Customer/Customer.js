//import dependencies
import { useState, useEffect } from "react";
import axios from "axios";
//customer component
export const Customer = () => {
//server url
  const url = "http://localhost:8000/test";
  //useState initialize to null
  const [TestData, SetTestData] = useState(null);
//useffect hook 
  useEffect(() => {
    // Use useEffect to make the API request when the component mounts
    async function fetchData() {
      try {
        const apiResponse = await axios.get(url);
        SetTestData(apiResponse.data);
        console.log(apiResponse.data); // Log the response data
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData(); // Call the fetchData function
  }, []); // The empty array [] ensures the effect runs once on component mount

  return (
    //display data
    <div>
      <h1>Customer</h1>
     
      {console.log(TestData)}
      {TestData && (
        <div>
          <p>Test: {TestData.test}</p>
          <p>Test2: {TestData.test2}</p>
          <p>Test3: {TestData.test3}</p>
        </div>
      )}
    </div> );
};
