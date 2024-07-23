import React, { useState } from 'react';
import BaseComponent from './components/BaseComponent'
import ExtendedComponent from './components/ExtendedComponent';
import Button from './components/Button';
import Form from './components/Form';
import Modal from './components/Modal';
import './App.css';



const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSubmit = (data: any) => {
    console.log('Form data:', data);
    setIsModalOpen(false);
  };


  return (
    <div>
      <BaseComponent title="Componente base" description="Este compontente usa o compoente base 'BaseComponent'" />
      
      <ExtendedComponent title="Componente extendido 'ExtendedComponent' de 'BaseComponent'" description="Componente extendido." additionalInfo="mais informações" />

      <Button label="Abrir modal" onClick={handleOpenModal} />
      <Modal title="Formulario de modal" isOpen={isModalOpen} onClose={handleCloseModal}>
        <Form onSubmit={handleSubmit} />
      </Modal>



    </div>



  );
};

export default App;
