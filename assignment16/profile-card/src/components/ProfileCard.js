import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, role, location, email, image }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={name} />
      </div>
      <div className="card-body">
        <h2>{name}</h2>
        <p className="role">{role}</p>
        <div className="info">
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Location:</strong> {location}</p>
        </div>
        <button className="contact-btn">Contact</button>
      </div>
    </div>
  );
};

export default ProfileCard;
