import React, { useState } from "react";
import "./UserCard.css";

function UserCard({ picture, name, email }) {
  const [likes, setLikes] = useState(0);
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="user-card">
      <img src={picture} alt={name} className="user-image" />
      <h3>{name}</h3>

      {showEmail && <p className="email">{email}</p>}

      <div className="buttons">
        <button onClick={() => setLikes(likes + 1)}>❤️ Like ({likes})</button>
        <button onClick={() => setShowEmail(!showEmail)}>
          {showEmail ? "Hide Email" : "Show Email"}
        </button>
      </div>
    </div>
  );
}

export default UserCard;
