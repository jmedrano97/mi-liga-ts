import React from 'react'
import Header from '../components/shared/Header'



function CreateLeague() {
    return (
        <div className="flex flex-col min-h-screen rounded-lg md:p-8">
            <Header />
            <div className='flex justify-evenly' id='contenedor'>
                <div className="p-8" id='formulario'>
                    <h3 className="text-gray-500 uppercase text-sm font-bold mb-2">
                        Mi Liga
                    </h3>
                    <h1 className="text-6xl text-white font-medium mb-2">
                        Crea una nueva Liga<span className="text-first">.</span>
                    </h1>

                    <form className="mt-8">
                        <div className="max-w-lg mb-4">
                            <input
                                type="text"
                                // autoComplete="off"
                                className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                                placeholder="Nombre de la liga"
                            />
                        </div>
                        <div className="max-w-lg mb-4">
                            <textarea
                                // autoComplete="off"
                                className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                                placeholder="Descripción de la liga"
                            />
                        </div>
                        <div className='max-w-lg mb-4'>
                            <input
                                type="url"
                                // autoComplete="off"
                                className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                                placeholder="Link de la liga"
                            />
                        </div>
                        <div className='max-w-lg mb-4'>
                            <input
                                type="file"
                                // autoComplete="off"
                                className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                                placeholder="Imagen de la liga"
                            />
                        </div>
                        <div className="max-w-lg">
                            <button className="bg-first text-white w-full py-3 px-4 rounded-full hover:bg-first-hover transition-colors">
                                Crear
                            </button>
                        </div>
                    </form>
                </div>
                <div className="p-8 content-center" id='vista-previa'>
                    <div className="max-w-sm mx-auto rounded-lg shadow-xl mb-0">
                        <div className="py-4 px-6 flex flex-col gap-2">
                            <a href="#" className="text-2xl font-bold text-white">Vista previa</a>
                        </div>
                        <div>
                            <img
                                src="https://images.vexels.com/media/users/3/134326/isolated/preview/2fa15bb6b4462d2cdffa73c55fe2e000-insignia-de-escudo.png"
                                alt=""
                                className=""
                            />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateLeague
