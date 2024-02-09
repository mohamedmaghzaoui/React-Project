//import dependencies
import { useState, useEffect } from "react";
import axios from "axios";
import { cate } from "./Components/categories";
import { Categories } from "./Components/categories";
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
    <div className="w-100">
      <Categories className="row" />
    </div>
  );
};
/* 
 //display data
    <div>
      {TestData &&
        TestData.map((value) => (
          <div>
            <p>{value.name}</p>
            <p>{value.age}</p>
          </div>
        ))}
    </div>*/
