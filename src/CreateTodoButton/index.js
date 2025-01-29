import './CreateTodoButton.css';
import React from 'react';

import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        event.preventDefault();
        setOpenModal(!openModal);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
