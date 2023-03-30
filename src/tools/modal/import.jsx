import React, { useState } from "react";
import Modal from "./Modal";

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
