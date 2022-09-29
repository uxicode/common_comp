import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate=useNavigate();
    const ExamMoveToHandler=()=>{
        navigate( '/temp' );
    }
  return (
      <div className="main">
        <p>Main Page</p>
          <button onClick={ExamMoveToHandler}>Exam Move Page Button</button>
      </div>
  );
}

export default Main;
