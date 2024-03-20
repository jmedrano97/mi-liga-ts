import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Sidebar from '../components/shared/Sidebar'
import HeaderLeague from '../components/shared/HeaderLeague'
import SecondarySide from '../components/shared/SecondarySide'
import LoadingOverlay from '../components/LoadingOverlay'
import { useDispatch } from 'react-redux'
import { setDetailLeague } from '../features/leagues/DetailLeagueSlice'
import { setCompetitionsLeague } from '../features/leagues/CompetitionsLeagueSlice'
import SectionTablesTeams from '../components/SectionTablesTeams'
import SectionMatches from '../components/SectionMatches'
import {fetchLeagueByLink, fetchCompetitionsByLeague} from '../api/ligas.api'


const OneLeague = () => {
    const { league_link = "" } = useParams<{ league_link: string }>();
    const [isLoading, setIsLoading] = useState(false);
    const [showMenu] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const dispatch = useDispatch();
    // const ligaDetails = useSelector((state: any) => state.detailLeague);
    // let load = true;
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetchLeagueByLink(league_link!); 
                dispatch(setDetailLeague(response));

                const competitions = await fetchCompetitionsByLeague(response.league_id);
                dispatch(setCompetitionsLeague(competitions));


            } catch (error) {
                console.error("Error al obtener los datos", error);
                setLoad(false);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [league_link,dispatch]);

    if (!load) {
        return <div>Error al obtener los datos</div>;
    }
    return (
        <div className="bg-back1 w-full min-h-screen">
            <LoadingOverlay isLoading={isLoading} />

            <Sidebar showMenu={showMenu} />
            <SecondarySide showOrder={showOrder} setShowOrder={setShowOrder} />
            <main className="lg:pl-32 lg:pr-96 pb-20">
                <div className="md:p-8 p-4">
                    {/* Header */}
                    <HeaderLeague />
                    <SectionMatches />
                    <SectionTablesTeams />


                </div>
            </main>
        </div>
    )
}

export default OneLeague