import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const message = useSelector((state) => state.greetings.greating);

  return (
    <div>
      <h1>Refresh the browser to display random greeting</h1>
      <h2>{message}</h2>
    </div>
  );
};

export default Greeting;
