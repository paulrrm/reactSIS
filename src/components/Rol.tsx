import { useEffect, useState } from "react";
import { ReqResRole } from "../types/rol.interface";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';

const Rol = () => {

    const [rols, setrols] = useState<ReqResRole[]>([])
    const [selectRol, setselectRol] = useState<ReqResRole | null>(null)
    const [rowClick, setRowClick] = useState<boolean>(true);
    const [nombrep, setnombre] = useState("")
    const [idp, setid] = useState("0")
    const [descripcionp, setdescripcion] = useState("")
    const [permisosp, setpermisos] = useState("")
    const [url, seturl] = useState("http://192.168.0.108:8091/avirtual/")
    useEffect(() => {
        obtenerRoles()

    }, [])
    useEffect(() => {
        setnombre(selectRol?.nombre)
        setid(selectRol?.idRol)
        setdescripcion(selectRol?.descripcion)
        setpermisos(selectRol?.permisos)



    }, [selectRol])

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
                <h1 className="text-3xl text-center py-4">EDITAR ROL</h1>
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
            <div className="flex-1 w-full bg-sky-300" >
                <h1 className="text-3xl text-center py-4">LISTADO</h1>
                <div className="card">
                    <DataTable value={rols} removableSort selectionMode={rowClick ? undefined : 'radiobutton'} selection={selectRol!}
                        onSelectionChange={(e) => setselectRol(e.value)} dataKey="idRol" tableStyle={{ minWidth: '50rem' }}>
                        <Column selectionMode="single" headerStyle={{ width: '3rem' }}></Column>
                        <Column field="idRol" header="ID" sortable style={{ width: '25%' }}></Column>
                        <Column field="nombre" header="Nombre" sortable style={{ width: '25%' }}></Column>
                        <Column field="descripcion" header="Descripcioon" sortable style={{ width: '25%' }}></Column>
                        <Column field="persmisos" header="Permisos" sortable style={{ width: '25%' }}></Column>
                    </DataTable>
                </div>
            </div>
        </div>



    );
};


export default Rol