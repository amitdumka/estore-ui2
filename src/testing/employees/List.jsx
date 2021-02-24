import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { employeeService } from '../_services';

function List({ match }) {
    const { path } = match;
    const [employees, setEmployees] = useState(null);

    useEffect(() => {
        employeeService.getAll().then(x => setEmployees(x));
    }, []);

    function deleteEmployee(id) {
        setEmployees(employees.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        employeeService.delete(id).then(() => {
            setEmployees(employees => employees.filter(x => x.id !== id));
        });
    }

    return (
        <div>
            <h1>Employees</h1>
            <Link to={`${path}/add`} className="btn btn-sm btn-success mb-2">Add Employee</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Name</th>
                        <th style={{ width: '30%' }}>Email</th>
                        <th style={{ width: '30%' }}>Role</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {employees && employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.title} {employee.firstName} {employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.role}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to={`${path}/edit/${employee.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button onClick={() => deleteEmployee(employee.id)} className="btn btn-sm btn-danger btn-delete-employee" disabled={employee.isDeleting}>
                                    {employee.isDeleting 
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Delete</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    {!employees &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {employees && !employees.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No Employees To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export { List };