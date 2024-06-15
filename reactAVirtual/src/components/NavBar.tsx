import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';

const NavBar = () => {
    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Acerca De',
            icon: 'pi pi-star'
        },
      
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        },
        {
            label: 'Ingresar',
            icon: 'pi pi-server',
            
        },
    ];

    return (
        <nav className='border-b border-green-200 '>
            <div className='py-4 px-2 flex justify-between items-center' >
            <a className="text-2xl tracking-widest text-green-400" href="/">A Virtual</a>
            <div className="card text-3xl ">
                <Menubar model={items} />
            </div>
            </div>
            
        </nav>
    )
}

export default NavBar