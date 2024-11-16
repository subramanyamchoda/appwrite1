import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Send from './Send'; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Send />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
