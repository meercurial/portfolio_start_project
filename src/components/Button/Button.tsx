import React from 'react';

interface IButtonProps {
  name: string;
}

export const Button: React.FC<IButtonProps> = ({ name }) => {
  const onClickHandler = () => {};

  return <button onClick={onClickHandler}>{name}</button>;
};
