import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoIndex from './pages/TodoIndex.tsx'
import AllLeagues from './pages/AllLeagues.jsx'
import CreateLeague from './pages/CreateLeague.tsx';
import EditLeague from './pages/EditLeague.tsx';
import OneLeague from './pages/OneLeague.tsx';
import PruebaJaime from './pages/PruebaJaime.tsx';
import { useSelector } from 'react-redux';
import LoadingOverlay from './components/LoadingOverlay.tsx';
import { RootState } from './app/store';

const App = (): JSX.Element => {
  const isLoading = useSelector((state: RootState) => state.loadingOverlay.isLoading);
  return (
    <div className='bg-back1'>
      <Routes>
        <Route path="/" element={<AllLeagues />} />
        <Route path="/crear-liga" element={<CreateLeague />} />
        <Route path="/:league_link" element={<OneLeague />} />
        <Route path="/editar-liga/:id_league" element={<EditLeague />} />
        <Route path="/todo" element={<TodoIndex />} />
        <Route path="/PruebaJaime" element={<PruebaJaime />} />
      </Routes>
      <LoadingOverlay isLoading={isLoading} />
    </div>
  );
};

export default App;