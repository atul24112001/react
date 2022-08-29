import { useState, useEffect } from 'react';
import useCounter from '../Hook/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
