import React from "react";
import "./HobbyList.css";

function HobbyList({ hobbies }) {
  if (hobbies.length < 1) return null;
  return (
    <div>
      <h4>Hobbies</h4>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={hobby}>index</li>
        ))}
      </ul>
    </div>
  );
}

export default HobbyList;
