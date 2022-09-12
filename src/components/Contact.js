import React from "react";

export default function Contact({ contact }) {
  const { name, imgURL, phone, email } = contact;
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{name}</h2>
          <img className="circle-img" src={imgURL} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{phone}</p>
          <p className="info">{email}</p>
        </div>
      </div>
    </div>
  );
}
