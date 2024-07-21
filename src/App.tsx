import React, { useState } from 'react';
import BaseComponent from './components/BaseComponent'
import ExtendedComponent from './components/ExtendedComponent';
import Button from './components/Button';
import Form from './components/Form';
import Modal from './components/Modal';


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
      <BaseComponent title="Base Component" description="This is a base component." />
      <ExtendedComponent title="Extended Component" description="This is an extended component." additionalInfo="Additional Information" />

      <Button label="Open Modal" onClick={handleOpenModal} />
      <Modal title="Form Modal" isOpen={isModalOpen} onClose={handleCloseModal}>
        <Form onSubmit={handleSubmit} />
      </Modal>



    </div>



  );
};

export default App;
