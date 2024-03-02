import axios from "axios";
import { useContext, useState } from "react";
import { ChatContext } from "../../../Contexts/chatContext";

export const ChatForm = (props) => {
  
  const [chattitle, setChatForm] = useState();
  const [ChatError, setChatError] = useState("");
  
  const handelInput = (e) => {
    setChatForm(e.target.value);
    setChatError(""); 
  };
  //function to send data to symfony server
  const submitData = async () => {
    const chatData = {
      ...props.chatData,
      chattitle,
    };
    try {
      setChatError(
        <div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      );
      const response = await axios.post(
        "http://localhost:8000/newChat",
        chatData
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Chose your chat Title</h2>
      <input
        onInput={(e) => handelInput(e)}
        title=""
        type="text"
        className="form-control"
      />
      <br />
      {ChatError ? <p className="text-danger"> {ChatError}</p> : <br />}
      <p />
      

      <button
        onClick={() => {
          !chattitle
            ? setChatError("chat title is required")
            : setChatError("");
          if (chattitle) {
            submitData();
          }
        }}
        className="btn btn-success"
      >
        Finish
      </button>
    </div>
  );
};
