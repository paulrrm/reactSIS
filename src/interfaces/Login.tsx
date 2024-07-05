import { Card } from 'primereact/card';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { useEffect, useRef, useState } from 'react';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import {useAuthStore} from '../store/auth.store'
import {useNavigate} from 'react-router-dom'
import type { ReqLoginResponse } from '../types/reqlogin.intreface';
import { Toast, ToastMessage } from 'primereact/toast';
import axios from 'axios';

function login() {
    const [pwd, setpwd] = useState("")
    const [usr, setusr] = useState("")
    const authStatus = useAuthStore(state => state.status)
    const login = useAuthStore(state => state.loginn)
    const logout = useAuthStore(state => state.logout)
    const toast = useRef<Toast>(null);
    const [url, seturl] = useState("http://localhost:8091/avirtual/")
    const showErrorUsr = () => {
        toast.current?.show({ severity: 'warn', summary: 'Error', detail: 'USUARIO O CONTRASEnia' });
    };
    const showErrorPermisos = () => {
        toast.current?.show({ severity: 'error', summary: 'Info', detail: 'Message Content' });
    };
    useEffect(() => {
      setTimeout(() => {
        logout();
      }, 200);
    }, [])
    const navigate = useNavigate()
    const handlerLink = () =>{
        
        navigate('/principal')
    }
    const  loginspring =  async (usr:string,pwd:string) => {
        console.log(`${url}/login/${usr}/${pwd}`)
        try{
            const {data}  = await axios.get<ReqLoginResponse>( `${url}usuario/login/${usr}/${pwd}`)
            console.log(data)
            if(data.rol.nombre === 'admin'){
                console.log("Admin")
               login(usr , pwd);
               const datosString = JSON.stringify(data);

                // Guardar en localStorage bajo la clave 'usuario'
                localStorage.setItem('usuarioAVirtual', datosString);
                
            }
            else
            {
                {showErrorPermisos()}
                
            }
           
        }
        catch(error){
            {showErrorUsr()}
        }
    }

    return (

        <div className="login flex justify-center py-20 self-center">
            <Toast ref={toast} />
            <Card title="INGRESO">
                
                    <FloatLabel>
                        <InputText id="username" value={usr} onChange={(e) => setusr(e.target.value)} />
                        <label htmlFor="username">USUARIO</label>
                    </FloatLabel>
                    <br />
                    <FloatLabel>
                        <Password id="usernkey" value={pwd} onChange={(e) => setpwd(e.target.value)} />
                        <label htmlFor="userkey">CLAVE</label>
                    </FloatLabel>
                    <br />
                    <Button onClick={() => loginspring(usr,pwd)} className='margenboton' label="ENVIAR" severity="success" />
                    <h2>Estado:</h2>
                    {
                        (authStatus === 'authenticated')?
                        <div>Autenticado
                            <div className='flex justify-between'>
                            <Button className='margenboton' label="Ingresar" severity="success" onClick={()=>handlerLink()} />
                            <Button onClick={logout} className='margenboton' label="Salir" severity="success" />
                            </div>
                        </div>
                        :<div>No autenticado</div>
                    }
                
            </Card>
        </div>
    )
}
export default login;