import React from 'react';
import Button from './Button';

interface FormProps {
  onSubmit: (data: any) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const data = {}; // Lógica para coletar dados do formulário
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos do formulário */}
      <Button label="Submeter modal" onClick={handleSubmit} />
    </form>
  );
};

export default Form;
