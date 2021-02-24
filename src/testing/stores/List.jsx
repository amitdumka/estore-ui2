import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { storeService } from '../_services';

function List({ match }) {
    const { path } = match;
    const [stores, setStores] = useState(null);

    useEffect(() => {
        storeService.getAll().then(x => setStores(x));
    }, []);

    function deleteStore(id) {
        setStores(stores.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        storeService.delete(id).then(() => {
            setStores(stores => stores.filter(x => x.id !== id));
        });
    }

    return (
        <div>
            <h1>Stores</h1>
            <Link to={`${path}/add`} className="btn btn-sm btn-success mb-2">Add Store</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Store Name</th>
                        <th style={{ width: '30%' }}>Store Code</th>
                        <th style={{ width: '30%' }}>City</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {stores && stores.map(store =>
                        <tr key={store.id}>
                            <td>{store.storeName} </td>
                            <td>{store.storeCode}</td>
                            <td>{store.city}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to={`${path}/edit/${store.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button onClick={() => deleteStore(store.id)} className="btn btn-sm btn-danger btn-delete-store" disabled={store.isDeleting}>
                                    {store.isDeleting 
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Delete</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    {!stores &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {stores && !stores.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No Stores To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export { List };