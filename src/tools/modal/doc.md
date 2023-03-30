Reusable Modal Component
A reusable modal component for React, styled with styled-components.

Props
The modal component accepts the following props:

open?: Boolean - Whether the modal should be visible or not. Default is false.
close?: Boolean - Whether the modal should be closed or not. Default is false.
animated?: Boolean - Whether the modal should have an animation when opening and closing. Default is false.
blur?: Boolean - Whether the background should be blurred when the modal is open. Default is false.
preventClose?: Boolean - Whether the modal should prevent close when the user clicks outside of the modal. Default is false.
width?: number | string - The width of the modal.
fullscreen?: Boolean - Whether the modal should be fullscreen or not. Default is false.
onClose?: Function - A callback function that is called when the modal is closed.
onOpen?: Function - A callback function that is called when the modal is opened.
Usage
To use the reusable modal component, you can import it into another component and pass the desired props to customize the modal.

Here's an example of how you can use the modal component:

javascript
Copy code
import React, { useState } from 'react';
import Modal from './Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal
        open={showModal}
        animated
        blur
        preventClose={false}
        onClose={() => setShowModal(false)}
      >
        <h1>Modal Content</h1>
        <p>This is an example of a modal.</p>
        <button onClick={() => setShowModal(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default App;
In this example, the modal component is rendered when the showModal state is true, and the modal will be closed when the "Close Modal" button is clicked and the showModal state is set back to false. The animated and blur props are set to true, and the preventClose prop is set to false, so the modal will close when the user clicks outside of the modal. The onClose prop is set to a function that sets the showModal state back to false when the modal is closed.