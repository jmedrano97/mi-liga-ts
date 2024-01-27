import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoIndex from './pages/TodoIndex.tsx'
import AllLeagues from './pages/AllLeagues.jsx'

const App = (): JSX.Element => {
  return (
    <div className='bg-[#262837]'>
      <Routes>
        <Route path="/" element={<AllLeagues />} />
        <Route path="/todo" element={<TodoIndex />} />
      </Routes>
    </div>
  );
};

export default App;