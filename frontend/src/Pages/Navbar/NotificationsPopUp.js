import React, { useState, useEffect } from "react";
import axios from "axios";

const NOTIFICATION_STYLE = {
  position: "fixed",
  top: "50px",
  right: "50px",
  backgroundColor: "white",
  zIndex: "9999",
  textAlign: "left",
  borderRadius: "10px",
  width: "300px",
  padding: "20px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
};

const BUTTON_STYLE = {
  margin: "5px",
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: "#f0f0f0",
  border: "1px solid #ccc",
};

export const Notifications =({ openPop, onClosePop })=> {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.example.com/notifications")
      .then((response) => {
        setNotifications(response.data.notifications);
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  }, []);

  const handleNotificationClick = (notificationId) => {
    // Handle notification click logic here
    console.log("Clicked notification:", notificationId);
    // You might want to mark the notification as read or redirect the user
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      onClosePop();
    }
  };

  const renderNotifications = notifications.map((notification) => (
    <button
      key={notification.id}
      onClick={() => handleNotificationClick(notification.id)}
      style={BUTTON_STYLE}
    >
      {notification.message}
    </button>
  ));

  if (!openPop) return null;
  return (
    <div style={NOTIFICATION_STYLE} onClick={handleOutsideClick}>
      <button style={{ position: "absolute", top: "5px", right: "5px", border: "none", background: "none", cursor: "pointer" }} onClick={onClosePop}>x</button>
      <div className="title">Notifications</div>
      <br />
      <div className="notifications">{renderNotifications}</div>
    </div>
  );
}
