import axios from "axios";
import { useEffect, useState } from "react";

const NewRol = () => {
  

    const [nombrep, setnombre] = useState("")
    const [idp, setid] = useState("0")
    const [descripcionp, setdescripcion] = useState("")
    const [permisosp, setpermisos] = useState("")
    const [url, seturl] = useState("http://localhost:8091/avirtual/")

   

    const handleChangep = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {

        setpermisos(e.target.value)
        console.log(permisosp)
    }

    const handleChangen = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {

        setnombre(e.target.value)
        console.log(nombrep)
    }
    const handleChanged = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {

        setdescripcion(e.target.value)
        console.log(descripcionp)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        if (idp != "0") {
            //editar
            console.log('editar')
            const response = await axios.put<ReqResRole[]>(`${url}rol`,
                {
                    idRol: parseInt(idp),

                    nombre: nombrep,
                    descripcion: descripcionp,
                    permisos: permisosp
                }
            ); // Reemplaza con la URL de tu API
            console.log(response)
        }
        else{
            console.log('nuevo')
            const response = await axios.post<ReqResRole[]>(`${url}rol`,
                {
                   

                    nombre: nombrep,
                    descripcion: descripcionp,
                    permisos: permisosp
                }
            ); // Reemplaza con la URL de tu API
            console.log(response)
        }
        obtenerRoles()

    }

    const obtenerRoles = async () => {
        try {
            const response = await axios.get<ReqResRole[]>(`${url}rol`); // Reemplaza con la URL de tu API
            console.log(response)
            const datos = response.data
            setrols(datos)

        } catch (error) {
            console.error('Error al obtener la lista de estudiantes:', error);
        }
    };

    // Llamar a la función para obtener estudiantes al montar el componente

    return (
        <div className="h-screen flex flex-col ">
            <div className="flex-1 bg-blue-200 w-full mx-auto px-4 py-8">
                <h1 className="text-3xl text-center py-4">CREAR ROL</h1>
                <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-xl">
                    <form className="space-y-4"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID</label>
                            <input disabled type="text" id="id" value={idp} name="id" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                            <input type="text" value={nombrep} onChange={handleChangen} id="nombre" name="nombre" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripcion</label>
                            <input type="text" value={descripcionp} onChange={handleChanged} id="descripcion" name="descripcion" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label htmlFor="permisos" className="block text-sm font-medium text-gray-700">Permisos</label>
                            <input type="text" id="permisos" value={permisosp} onChange={handleChangep} name="permisos" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                        </div>


                        <div className="flex items-center justify-end">
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                AGREGAR
                            </button>
                        </div>
                    </form>
                </div>

            </div>
           
        </div>



    );
};


export default NewRol