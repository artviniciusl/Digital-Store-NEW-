import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';

const PageUsers = () => {
    const [visibleCreate, setVisibleCreate] = useState(false);
    const usuarios = [
        {
            nome: 'Arthur',
            email: 'arthurvinicius.lf@gmail.com',
            level: 'admin'
        },
        {
            nome: 'Vitor',
            email: 'vitor@gmail.com',
            level: 'user'
        },
    ]
    return (
        <>
            <div className={'flex justify-content-between mb-4'}>
            <h1>Usuários</h1>
            <Button onClick={() => setVisibleCreate(true)}>Novo usuário</Button>
            </div>

            <DataTable value={usuarios} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]}>
                <Column field="nome" header="Nome"></Column>
                <Column field="email" header="Email"></Column>
                <Column field="level" header="Nível"></Column>
                <Column field={'Ações'} bodyClassName={'w-1'} body={() => (
                    <div className='flex gap-3'>
                        <Button rounded icon={'pi pi-pencil'} />
                        <Button rounded icon={'pi pi-pencil'} />
                    </div>
                )}></Column>
            </DataTable>

            <Sidebar
                visible={visibleCreate}
                onHide={() => setVisibleCreate(false)}
                position={'right'}

            >
                Alguma coisa
            </Sidebar>
        </>
    );
}

export default PageUsers;
