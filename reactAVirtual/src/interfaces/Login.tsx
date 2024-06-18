import { Card } from 'primereact/card';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { useEffect, useState } from 'react';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import {useAuthStore} from '../store/auth.store'



function login() {
    const [pwd, setpwd] = useState("")
    const [usr, setusr] = useState("")
    const authStatus = useAuthStore(state => state.status)
    const login = useAuthStore(state => state.loginn)
    const logout = useAuthStore(state => state.logout)
    useEffect(() => {
      setTimeout(() => {
        logout();
      }, 200);
    }, [])
    
    return (

        <div className="login flex justify-center py-20 self-center">
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
                    <Button onClick={() => login(usr,pwd)} className='margenboton' label="ENVIAR" severity="success" />
                    <h2>Estado:</h2>
                    {
                        (authStatus === 'authenticated')?
                        <div>Autenticado
                            <div className='flex justify-between'>
                            <Button className='margenboton' label="Ingresar" severity="success" />
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