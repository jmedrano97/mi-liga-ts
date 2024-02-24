import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiBardFill,
} from 'react-icons/ri';
import Header from "../components/shared/Header";
import { Leagues } from '../components/Leagues';
import { fetchLeagues } from '../api/ligas.api';


function AllLeagues(): JSX.Element {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showOrder, setShowOrder] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  const [ligas, setLeagues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const leaguesData = await fetchLeagues();
        setLeagues(leaguesData);
      } catch (error) {
        // Manejar errores aquí si es necesario
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* <ComplementMenu showOrder={showOrder} setShowOrder={setShowOrder} /> */}
      {/* Menu movil */}
      <nav className="bg-back2 lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-10 lg:pr-10 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Selecciona tu league</h2>
            
            <Link to="/crear-liga" className="flex items-center gap-1 text-first bg-back2 py-2 px-4 rounded-lg">
              <RiBardFill />Crear MI league
            </Link>
          </div>
          {/* Content */}
          
          <Leagues leagues={ligas} />

        </div>
      </main>
    </div>
  );
}

export default AllLeagues;
