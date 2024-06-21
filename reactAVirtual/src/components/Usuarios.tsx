import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import type { ReqLoginResponse } from '../assets/types/reqlogin.intreface';
import { Button } from 'primereact/button';
const Usuarios = () => {
const [estudiantes, setEstudiantes] = useState<ReqLoginResponse[]>([]);

useEffect(() => {
    // Función asincrónica para obtener datos de la API usando Axios
    const obtenerEstudiantes = async () => {
        try {
            const response = await axios.get<ReqLoginResponse[]>('http://localhost:8091/avirtual/usuario'); // Reemplaza con la URL de tu API
            console.log(response)
            const datos = response.data
            setEstudiantes(datos)
            
        } catch (error) {
            console.error('Error al obtener la lista de estudiantes:', error);
        }
    };

    // Llamar a la función para obtener estudiantes al montar el componente
    obtenerEstudiantes();
}, []); // El segundo argumento [] asegura que useEffect se ejecute solo una vez al montar el componente
const actionBodyTemplate = () => {
    return <Button type="button" icon="pi pi-cog" rounded></Button>;
};
return (
    <div className="card">
            <DataTable value={estudiantes} removableSort tableStyle={{ minWidth: '50rem' }}>
                <Column field="idUsuario" header="Id" sortable style={{ width: '25%' }}></Column>
                <Column field="nombre" header="Nombre" sortable style={{ width: '25%' }}></Column>
                <Column field="direccion" header="Direccion" sortable style={{ width: '25%' }}></Column>
                <Column field="correo" header="Correo" sortable style={{ width: '25%' }}></Column>
                <Column field="correo" header="Correo" sortable style={{ width: '25%' }}></Column>
                <Column headerStyle={{ width: '5rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={actionBodyTemplate} />
            </DataTable>
        </div>
);
};

export default Usuarios