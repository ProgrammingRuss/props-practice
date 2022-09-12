import React from "react";
import Contact from "./Contact";

const Contacts = ({ contacts }) => {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact, index) => (
        <Contact key={index} contact={contact} />
      ))}
    </div>
  );
};

export default Contacts;
