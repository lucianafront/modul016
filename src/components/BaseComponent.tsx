import React from 'react';

interface BaseProps {
  title: string;
  description: string;
}

const BaseComponent: React.FC<BaseProps> = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default BaseComponent;
