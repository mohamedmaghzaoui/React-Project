//import dependencies
import { useState, useEffect } from "react";
import axios from "axios";
import { cate } from "./Components/categories";
import { Categories } from "./Components/categories";
//customer component
export const Customer = () => {
  return (
    <div className="w-100">
      <Categories className="row" />
    </div>
  );
};
