import React, { useEffect, useState } from 'react'
import Header from '../components/shared/Header'
import axios from 'axios';
import LoadingOverlay from '../components/LoadingOverlay';
import { useParams } from 'react-router-dom';
import FormLeague from '../components/FormLeague';
import { useDispatch, useSelector } from 'react-redux';
import { setLeagueFields } from '../features/leagues/leagueFormSlice';


function EditLeague(): JSX.Element {
    const { id_league } = useParams<{ id_league: string }>();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const formData = useSelector((state: any) => state.leagueForm);
   
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/league/${id_league}`);
                // setFormData(response.data);
                dispatch(setLeagueFields(response.data));
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id_league]); // Asegúrate de incluir `id` como dependencia

    return (
        <div className="flex flex-col min-h-screen rounded-lg md:p-8">
            <Header />
            <div className='flex justify-evenly' id='contenedor'>
                <div className="p-8 w-full" id='formulario'>
                    <h3 className="text-gray-500 uppercase text-sm font-bold mb-2">
                        EDITAR
                    </h3>
                    <h1 className="text-6xl text-white font-medium mb-2">
                        Editar la Liga<span className="text-first">.</span>
                    </h1>
                    <FormLeague />
                </div>
                <div className="p-8 w-full" id='vista-previa'>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <div>
                                <img
                                    // src="https://img.freepik.com/foto-gratis/programador-sonriente-tiro-medio-sosteniendo-telefono_23-2149101155.jpg?w=2000&t=st=1660331259~exp=1660331859~hmac=4a6b4885e8141e344e237674190db60aa4431782337bc5df8a22e9d895ebdd6f"
                                    src={formData.img}
                                    className="w-full h-full object-cover rounded-lg"
                                    alt=""
                                />
                            </div>
                            <div className="mt-4 flex flex-col gap-2">
                                <span className="text-blue-600 uppercase font-semibold text-xs">
                                    Liga
                                </span>
                                <h2 className="text-2xl font-semibold">
                                   {formData.name}

                                </h2>
                                <p className="text-gray-600">
                                    {formData.description}
                                </p>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=2000&t=st=1660333883~exp=1660334483~hmac=70d21d08617e34074243187ec59df8fd4b564c084f33609c6db242de4e40fc01"
                                            className="w-[40px] h-[40px] object-cover rounded-full"
                                            alt="Yared Jacquez Trillo"
                                        />
                                        <div>
                                            <span>Yared Jacquez Trillo</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="uppercase text-gray-600 text-sm">19 sep 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default EditLeague
