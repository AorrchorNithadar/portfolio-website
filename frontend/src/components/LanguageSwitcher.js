import React from 'react';

const LanguageSwitcher = ({ language, setLanguage }) => {
  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="TH">TH</option>
      <option value="EN">EN</option>
    </select>
  );
};


export default LanguageSwitcher;