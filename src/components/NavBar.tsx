import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import logo from '/img/logo-dark.svg'


const NavBar = () => {
    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/'

        },
        {
            label: 'Acerca De',
            icon: 'pi pi-star',
            url: '/about'
        },

        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            url: '/contact'
        },
        {
            label: 'Ingresar',
            icon: 'pi pi-server',
            url: '/login'

        },
    ];

    return (
        <nav className='border-b border-green-200 '>
            <div className='px-10 py-5 flex justify-between items-center' >
            <img src={logo} alt="LOGO" />
                <a className="text-2xl tracking-widest text-green-400" href="/">A Virtual</a>
                <div className="card text-3xl bg-gray-600">
                    <Menubar model={items} />
                </div>
            </div>

        </nav>
    )
}

export default NavBar