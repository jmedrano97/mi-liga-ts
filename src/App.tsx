import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoIndex from './pages/TodoIndex.tsx'
import AllLeagues from './pages/AllLeagues.jsx'
import CreateLeague from './pages/CreateLeague.tsx';
import EditLeague from './pages/EditLeague.tsx';
import OneLeague from './pages/OneLeague.tsx';

const App = (): JSX.Element => {
  return (
    <div className='bg-[#262837]'>
      <Routes>
        <Route path="/" element={<AllLeagues />} />
        <Route path="/crear-liga" element={<CreateLeague />} />
        <Route path="/:league_id" element={<OneLeague />} />
        <Route path="/editar-liga/:id_league" element={<EditLeague />} />
        <Route path="/todo" element={<TodoIndex />} />
      </Routes>
    </div>
  );
};

export default App;