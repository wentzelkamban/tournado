import React from 'react';
import './styles.css';

interface InputProps {
  id: string,
  label: string,
  type?: string,
  name?: string
}

const Input: React.FC<InputProps> = ({ id, label, type, name }) => {
  const inputName = name ?? id;

  return (
    <div className={'input'}>
      <label htmlFor={id}>{ label }</label>
      <input id={id} type={type} name={inputName} />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
}

export default Input;
