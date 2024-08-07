import { useState, useEffect } from 'react';
import { DataTable   } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import type { ReqLoginResponse } from '../types/reqlogin.intreface';
import { Button } from 'primereact/button';

const Usuarios = () => {
    const [estudiantes, setEstudiantes] = useState<ReqLoginResponse[]>([]);
    const [selectedEstudiante, setSelectedPEstudiante] = useState<ReqLoginResponse | null>(null);
    const [rowClick, setRowClick] = useState<boolean>(true);
    const [rols, setrols] = useState<ReqResRole[]>([])
    const [url, seturl] = useState("http://192.168.0.108:8091/avirtual")
    const obtenerRoles = async () => {
        try {
            const response = await axios.get<ReqResRole[]>(`${url}/rol`); // Reemplaza con la URL de tu API
            console.log(response)
            const datos = response.data
            setrols(datos)

        } catch (error) {
            console.error('Error al obtener la lista de estudiantes:', error);
        }
    };
    useEffect(() => {
        // Función asincrónica para obtener datos de la API usando Axios
        const obtenerEstudiantes = async () => {
            try {
                const response = await axios.get<ReqLoginResponse[]>(`${url}/usuario`); // Reemplaza con la URL de tu API
                console.log(response)
                const datos = response.data
                setEstudiantes(datos)

            } catch (error) {
                console.error('Error al obtener la lista de estudiantes:', error);
            }
        };

        // Llamar a la función para obtener estudiantes al montar el componente
        obtenerEstudiantes();
        obtenerRoles();
    }, []);
    
    
    // El segundo argumento [] asegura que useEffect se ejecute solo una vez al montar el componente
    const actionBodyTemplate = () => {
        return <Button type="button" icon="pi pi-cog" rounded></Button>;
    };
    return (

        <div className="h-screen flex flex-col ">
            <div className="flex-1 bg-blue-200 w-full mx-auto px-4 py-8">
                <h1 className="text-3xl text-center py-4">CREAR / EDITAR</h1>
                <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-xl">
            <form className="space-y-4">
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input type="text" id="nombre" name="nombre" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                </div>
                <div>
                    <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">Dirección</label>
                    <input type="text" id="direccion" name="direccion" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                </div>
                <div>
                    <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo</label>
                    <input type="email" id="correo" name="correo" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                </div>
                <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
                    <input type="tel" id="telefono" name="telefono" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                </div>
                <div>
                    <label htmlFor="clave" className="block text-sm font-medium text-gray-700">Clave</label>
                    <input type="password" id="clave" name="clave" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                </div>
                <div>
                    <label htmlFor="rol" className="block text-sm font-medium text-gray-700">Rol</label>
                    <select id="rol" name="rol" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                        <option key={0} value=" "> </option>
                        {rols.map( rol =>(
                            <option key={rol.idRol} value={rol.nombre}>{rol.nombre}</option>
                        ))}
                        
                        
                    </select>
                </div>
                <div className="flex items-center justify-end">
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Registrar
                    </button>
                </div>
            </form>
        </div>
                
            </div>
            <div className="flex-1 w-full bg-sky-300" >
                <h1 className="text-3xl text-center py-4">LISTADO</h1>
                <div className="card">
                    <DataTable value={estudiantes} removableSort selectionMode={rowClick ? undefined : 'radiobutton'} selection={selectedEstudiante!}
                onSelectionChange={(e) => setSelectedPEstudiante(e.value)} dataKey="idUsuario" tableStyle={{ minWidth: '50rem' }}>
                         <Column selectionMode="single" headerStyle={{ width: '3rem' }}></Column>
                        <Column field="idUsuario" header="Id" sortable style={{ width: '25%' }}></Column>
                        <Column field="nombre" header="Nombre" sortable style={{ width: '25%' }}></Column>
                        <Column field="direccion" header="Direccion" sortable style={{ width: '25%' }}></Column>
                        <Column field="correo" header="Correo" sortable style={{ width: '25%' }}></Column>
                        <Column field="telefono" header="Telefono" sortable style={{ width: '25%' }}></Column>
                        <Column field="clave" header="Clave" sortable style={{ width: '25%' }}></Column>
                        <Column field="rol.idrol" header="Rol" sortable style={{ width: '25%' }}></Column>
                    </DataTable>
                </div>
            </div>
        </div>

       
        
    );
};

export default Usuarios