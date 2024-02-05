import React from 'react'
import axios from 'axios';
import LoadingOverlay from '../components/LoadingOverlay';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLeagueFields } from '../features/leagues/leagueFormSlice';


const FormLeague: React.FC = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    const formData = useSelector((state: any) => state.leagueForm);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        dispatch(setLeagueFields(
            {
                ...formData,
                [name]: value
            }
        ));
    };

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     setIsLoading(true);
    //     e.preventDefault();
    //     try {
    //         // Enviar los datos del formulario al servidor utilizando Axios
    //         const response = await axios.post('http://localhost:4000/api/v1/league', formData);
    //         // Manejar la respuesta exitosa del servidor
    //         console.log('Respuesta del servidor:', response);
    //         // Limpiar el formulario (opcional)
    //         setFormData({
    //             name: '',
    //             description: '',
    //             league_link: '',
    //             img: ''
    //         });
    //         setIsLoading(false);

    //     } catch (error) {
    //         // Manejar errores de la petición
    //         console.error('Error al enviar los datos:', error);
    //         setIsLoading(false);
    //     }
    // };

    return (
        <form className="mt-8" >
            <LoadingOverlay isLoading={isLoading}/>
            <div className="max-w-lg mb-4">
                <input
                    type="text"
                    // autoComplete="off"
                    className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                    placeholder="Nombre de la liga"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="max-w-lg mb-4">
                <textarea
                    // autoComplete="off"
                    className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                    placeholder="Descripción de la liga"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>
            <div className='max-w-lg mb-4'>
                <input
                    type="text"
                    // autoComplete="off"
                    className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                    placeholder="Link de la liga"
                    name='league_link'
                    value={formData.league_link}
                    onChange={handleChange}
                />
            </div>
            <div className='max-w-lg mb-4'>
                <input
                    type="file"
                    accept="image/*"
                    // autoComplete="off"
                    className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                    placeholder="Imagen de la liga"
                    name='img'
                    // onChange={handleChange}
                />
            </div>
            <div className="max-w-lg">
                <button className="bg-first text-white w-full py-3 px-4 rounded-full hover:bg-first-hover transition-colors">
                    Crear
                </button>
            </div>
        </form>
    )
}

export default FormLeague