import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { storeService, alertService } from '../_services';

function AddEdit({ history, match }) {
    const { id } = match.params;
    const isAddMode = !id;
    
    // form validation rules 
    const validationSchema = Yup.object().shape({
        storeName: Yup.string()
            .required('First Name is required'),
        storeCode: Yup.string()
            .required('Last Name is required'),
        city: Yup.string()
            .required('Email is required'),
    });

    // functions to build form returned by useForm() hook
    const { register, handleSubmit, reset, setValue, getValues, errors, formState } = useForm({
        resolver: yupResolver(validationSchema)
    });

    function onSubmit(data) {
        return isAddMode
            ? createUser(data)
            : updateUser(id, data);
    }

    function createUser(data) {
        return storeService.create(data)
            .then(() => {
                alertService.success('User added', { keepAfterRouteChange: true });
                history.push('.');
            })
            .catch(alertService.error);
    }

    function updateUser(id, data) {
        return storeService.update(id, data)
            .then(() => {
                alertService.success('User updated', { keepAfterRouteChange: true });
                history.push('..');
            })
            .catch(alertService.error);
    }

    const [user, setUser] = useState({});
    
    useEffect(() => {
        if (!isAddMode) {
            // get user and set form fields
            storeService.getById(id).then(user => {
                const fields = [ 'storeName', 'storeCode', 'city'];
                fields.forEach(field => setValue(field, user[field]));
                setUser(user);
            });
        }
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} onReset={reset} style={{paddingRight: 10}}>
            <h1>{isAddMode ? 'Add Store' : 'Edit Store'}</h1>
            <div className="form-row">
                
                <div className="form-group col-7">
                    <label>Store Name</label>
                    <input name="storeName" type="text" ref={register} className={`form-control ${errors.storeName ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.storeName?.message}</div>
                </div>
                <div className="form-group col-7">
                    <label>Store Code</label>
                    <input name="storeCode" type="text" ref={register} className={`form-control ${errors.storeCode ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.storeCode?.message}</div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-7">
                    <label>City</label>
                    <input name="city" type="text" ref={register} className={`form-control ${errors.city ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.city?.message}</div>
                </div>               
            </div>
            
            
            <div className="form-group">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Save
                </button>
                <Link to={isAddMode ? '.' : '..'} className="btn btn-danger">Cancel</Link>
            </div>
        </form>
    );
}

export { AddEdit };