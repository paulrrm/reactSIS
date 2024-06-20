export interface ReqLoginResponse {
    idUsuario: number;
    nombre: string;
    direccion: string;
    correo: string;
    telefono: string;
    clave: string;
    rol:Rol ;
    cedula:string;
}
export interface Rol {
    idRol: number;
    nombre: string;
    descripcion: string;
    permisos: string;
}