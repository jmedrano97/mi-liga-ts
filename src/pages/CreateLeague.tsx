import React, { useState } from 'react'
import Header from '../components/shared/Header'
import axios from 'axios';
import LoadingOverlay from '../components/LoadingOverlay';


function CreateLeague(): JSX.Element {
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        league_link: '',
        img: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();
        try {
            // Enviar los datos del formulario al servidor utilizando Axios
            const response = await axios.post('http://localhost:4000/api/v1/league', formData);
            // Manejar la respuesta exitosa del servidor
            console.log('Respuesta del servidor:', response);
            // Limpiar el formulario (opcional)
            setFormData({
                name: '',
                description: '',
                league_link: '',
                img: ''
            });
            setIsLoading(false);

        } catch (error) {
            // Manejar errores de la petición
            console.error('Error al enviar los datos:', error);
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen rounded-lg md:p-8">
            <LoadingOverlay isLoading={isLoading}/>
            <Header />
            <div className='flex justify-evenly' id='contenedor'>
                <div className="p-8" id='formulario'>
                    <h3 className="text-gray-500 uppercase text-sm font-bold mb-2">
                        Mi Liga
                    </h3>
                    <h1 className="text-6xl text-white font-medium mb-2">
                        Crea una nueva Liga<span className="text-first">.</span>
                    </h1>

                    <form className="mt-8" onSubmit={handleSubmit}>
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
                                value={formData.img}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="max-w-lg">
                            <button className="bg-first text-white w-full py-3 px-4 rounded-full hover:bg-first-hover transition-colors">
                                Crear
                            </button>
                        </div>
                    </form>
                </div>
                <div className="p-8  content-center" id='vista-previa'>
                    <div className="max-w-sm mx-auto rounded-lg shadow-xl mb-0">
                        <div className="py-4 px-6 flex flex-col gap-2">
                            <a href="#" className="text-2xl font-bold text-white">Hola...</a>
                        </div>



                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateLeague
