// Home.js
import React from 'react';

const Home = ({ language }) => {
  const content = {
    TH: "ยินดีต้อนรับสู่ Portfolio ของฉัน!",
    EN: "Welcome to my Portfolio!"
  };

  return <div className="page">{content[language]}</div>;
};

export default Home;

