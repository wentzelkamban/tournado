import React from 'react';
import './styles.css';

const Text: React.FC = ({ children }) => {
  return (
    <p className={"text"}>
      {children}
    </p>
  );
};

export default Text;
