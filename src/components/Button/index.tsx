import React from 'react';
import './styles.css';

interface ButtonProps {
  label: string,
  type?: 'button' | 'submit' | 'reset',
}

const Button: React.FC<ButtonProps> = ({ label, type }) => {
  return (
    <button className={'btn'} type={type}>{ label }</button>
  );
};

Button.defaultProps = {
  type: 'button',
}

export default Button;
