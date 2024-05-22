import { Card } from 'primereact/card';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import {useAuthStore} from '../store/auth.store'



function login() {
    const [pwd, setpwd] = useState("")
    const [usr, setusr] = useState("")
    const authStatus = useAuthStore(state => state.status)
    return (

        <div className="login">
            <Card title="INGRESO">
                <p >
                    <FloatLabel>
                        <InputText id="username" value={usr} onChange={(e) => setusr(e.target.value)} />
                        <label for="username">USUARIO</label>
                    </FloatLabel>
                    <br />
                    <FloatLabel>
                        <Password id="usernkey" value={pwd} onChange={(e) => setpwd(e.target.value)} />
                        <label for="userkey">CLAVE</label>
                    </FloatLabel>
                    <br />
                    <Button className='margenesminimos' label="Ingresar" severity="success" />
                    
                </p>
            </Card>
        </div>
    )
}
export default login;