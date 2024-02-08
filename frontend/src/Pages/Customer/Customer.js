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
      <h1>C</h1>
      <form className="container d-flex justify-content-center" role="search">
      <h3 className="me-3 text-light">Projeasy.</h3>
      <div className="input-group mb-3 SearchBar">
  <input type="search" className="form-control" placeholder="Taper un mot clé" aria-label="search" aria-describedby="basic-addon2"/>
  <button type="submit" className="input-group-text btn btn-outline-danger" id="basic-addon2">Rechercher</button>
</div>
</form>
      <div className="d-flex justify-content-center">
      <button className="btn btn-outline-danger m-3">Programmation</button>
       <button className="btn btn-outline-danger m-3">Graphisme</button>
       <button className="btn btn-outline-danger m-3">Marketing</button>
       <button className="btn btn-outline-danger m-3">Montage</button>
       <button className="btn btn-outline-danger m-3">Rédaction</button>
       <button className="btn btn-outline-danger m-3">Photographie</button>
      </div>
      
      <div className="container d-flex flex-wrap">
      <div class="card" style={{width: '18rem'}}>
  <img src="https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title text-start">Freelancer name</h6>
    <p class="card-text">Je vais faire un site web pour vous.</p>
    <div className="d-flex flex-col justify-content-start me-5">
    <p href="#" class="me-5 fw-bold text-success">Pour 76€</p>
    <div className="ms-5">
    <svg className="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
<p className=" fw-bold text-danger">1153</p>
</div>
</div>

  </div>
</div>
<div class="card ms-3" style={{width: '18rem'}}>
  <img src="https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title text-start">Freelancer name</h6>
    <p class="card-text">Je vais faire un site web pour vous.</p>
    <div className="d-flex flex-col justify-content-start me-5">
    <p href="#" class="me-5 fw-bold text-success">Pour 76€</p>
    <div className="ms-5">
    <svg className="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
<p className=" fw-bold text-danger">1153</p>
</div>
</div>

  </div>
</div>
<div class="card" style={{width: '18rem'}}>
  <img src="https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title text-start">Freelancer name</h6>
    <p class="card-text">Je vais faire un site web pour vous.</p>
    <div className="d-flex flex-col justify-content-start me-5">
    <p href="#" class="me-5 fw-bold text-success">Pour 76€</p>
    <div className="ms-5">
    <svg className="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
<p className=" fw-bold text-danger">1153</p>
</div>
</div>

  </div>
</div>
</div>
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
