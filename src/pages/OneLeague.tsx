import React, { useEffect, useState } from 'react'
import { RiAddLine, RiBardFill, RiMenu3Fill, RiPieChartLine, RiUser3Line } from 'react-icons/ri'
import Header from '../components/shared/Header'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Sidebar from '../components/shared/Sidebar'
import HeaderLeague from '../components/shared/HeaderLeague'
import SecondarySide from '../components/shared/SecondarySide'
import LoadingOverlay from '../components/LoadingOverlay'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentLeague } from '../features/leagues/LeagueCurrentSlice'

const OneLeague = () => {
    const { league_link } = useParams<{ league_link: string }>();
    const [isLoading, setIsLoading] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const dispatch = useDispatch();
    const ligaDetails = useSelector((state: any) => state.leagueCurrent);
    // let load = true;
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/leagueByLink/${league_link}`);
                // http://localhost:4000/api/v1/leagueByLink/
                dispatch(setCurrentLeague(response.data));
            } catch (error) {
                console.error("Error al obtener los datos", error);
                setLoad(false);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [league_link]); // Asegúrate de incluir `id` como dependencia

    if (!load) {
        return <div>Error al obtener los datos</div>;
    }
    return (
        <div className="bg-[#262837] w-full min-h-screen">
            <LoadingOverlay isLoading={isLoading} />

            <Sidebar showMenu={showMenu} />
            <SecondarySide showOrder={showOrder} setShowOrder={setShowOrder} />
            {/* Header */}
            {/* <ComplementMenu showOrder={showOrder} setShowOrder={setShowOrder} ligaDetails={ligaDetails} /> */}
            {/* Menu movil */}
            {/* <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
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
            </nav> */}
            <main className="lg:pl-32 lg:pr-96 pb-20">
                <div className="md:p-8 p-4">
                    {/* Header */}
                    <HeaderLeague />
                    {/* Title content */}
                    <div className="flex items-center justify-between mb-16">
                        <h2 className="text-xl text-gray-300">Torneos</h2>

                    </div>
                    {/* Content */}
                    <div className="p-1 grid grid-cols-1 gap-8">
                        {/* {torneos.map((torneo) => (
                    <CardTorneo
                        key={torneo.id_torneo} // Asegúrate de que tu objeto torneo tenga una propiedad única como "id"
                        img="circulo.png" // Asegúrate de que tu objeto torneo tenga propiedades img, description, price, e inventory
                        description={`Liga ${torneo.id_liga}`}
                        name={torneo.nombre}
                        link={`/${torneo.id_torneo}/torneo`}
                    />
                ))} */}
                    </div>

                </div>
            </main>
        </div>
    )
}

export default OneLeague