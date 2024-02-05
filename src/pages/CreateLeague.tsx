import React from 'react'
import Header from '../components/shared/Header'
import FormLeague from '../components/FormLeague'

function CreateLeague(): JSX.Element {
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
                    <FormLeague />
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
