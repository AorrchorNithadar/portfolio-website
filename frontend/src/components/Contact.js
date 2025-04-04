// Contact.js
import React from 'react';

const Contact = ({ language }) => {
  const content = {
    TH: "ติดต่อฉันได้ที่",
    EN: "Contact me at"
  };

  return <div className="page">{content[language]}</div>;
};

export default Contact;