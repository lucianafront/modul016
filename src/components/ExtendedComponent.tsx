import React from 'react';
import BaseComponent from './BaseComponent';

interface ExtendedProps extends React.ComponentProps<typeof BaseComponent> {
  additionalInfo: string;
}

const ExtendedComponent: React.FC<ExtendedProps> = ({ title, description, additionalInfo }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{additionalInfo}</p>
    </div>
  );
};

export default ExtendedComponent;
