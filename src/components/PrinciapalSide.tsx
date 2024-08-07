
import {  useState } from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { Button } from 'primereact/button';

export default function PrinciapalSide() {
    const items = [
        {
            key: '0',
            label: 'USUARIOS',
            icon: 'pi pi-users',
            items: [
                {
                    key: '0_1',
                    label: 'Nuevo',
                    url: '/principal'
                },
                {
                    key: '0_2',
                    label: 'Editar',
                    url: '/editusr'
                }
            ]
        },
        {
            key: '1',
            label: 'ROLES',
            icon: 'pi pi-flag',
            items: [
                {
                    key: '1_0',
                    label: 'Nuevo',
                    url: '/newrol'
                }
                ,
                {
                    key: '1_1',
                    label: 'Editar',
                    url: '/editrol'
                }
            ]
        },
        {
            key: '2',
            label: 'PERIODO',
            icon: 'pi pi-calendar',

            items: [
                {
                    key: '2_0',
                    label: 'New Event',
                },
                {
                    key: '2_1',
                    label: 'Today',
                },
                {
                    key: '2_2',
                    label: 'This Week',
                    
                }
            ]
        }
    ];

    const [expandedKeys, setExpandedKeys] = useState({});

    const toggleAll = () => {
        if (Object.keys(expandedKeys).length) {
            collapseAll();
        } else {
            expandAll();
        }
    };

    const expandAll = () => {
        items.forEach(expandNode);
        setExpandedKeys({ ...expandedKeys });
    };

    const collapseAll = () => {
        setExpandedKeys({});
    };

    const expandNode = (node:any) => {
        if (node.items && node.items.length) {
            // expandedKeys[node.key] = true;

            // node.items.forEach(expandNode);
        }
    };

    return (
        <div className="card flex flex-column w-1/6 gap-3 bg-gray-200 p-2 rounded-lg shadow-lg">
            <Button className='text-left' type="button" label="Toggle All" text onClick={() => toggleAll()} />
            <PanelMenu model={items} expandedKeys={expandedKeys} onExpandedKeysChange={setExpandedKeys} className="w-full " multiple />
        </div>

    )
}