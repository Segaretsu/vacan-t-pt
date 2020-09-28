import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextInput, Row, Button, RadioGroup, Col } from 'react-materialize';
import { Services } from '../services/users.service';

import { useToasts } from 'react-toast-notifications';

export const UserForm = () => {

    const { addToast } = useToasts();

    const users = [];


    // Schema validador de yup
    const userSchema = Yup.object().shape({
        name: Yup.string().trim()
            .required('Este campo es obligatorio'),
        email: Yup.string().trim()
            .required('Este campo es obligatorio')
            .email('Correo electronico invalido')
            .min(5, 'Mínimo 5 caracteres'),
        phone: Yup.string()
            .required('Este campo es obligatorio'),
        operacion: Yup.string()
            .required('Tiene que especificar la operación a realizar')
    });

    const userCallBack = (values) => {
        const { operacion, ...usuario } = values;
        if (operacion === 'add') {
            Services.addUser(usuario, ({ data }) => {
                console.log(data);
                addToast('¡Usuario registrado con exito!, (id: ' + data.id + ')', { appearance: 'success' });
            }, (error) => {
                addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
            });
        } else if (operacion === 'modify') {
            Services.modifyUser(usuario, ({ data }) => {
                console.log(data);
                addToast('¡Usuario modificado con exito!', { appearance: 'success' });
            }, (error) => {
                addToast('oh no :(, no eres tú somos nosotros, algo a ido mal', { appearance: 'error' });
            })
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            operacion: 'add',
        },
        validationSchema: userSchema,
        onSubmit: userCallBack,
    });

    const operaciones = [ { label: 'Añadir', value: 'add' }, { label: 'Modificar', value: 'modify' }, { label: 'Eliminar', value: 'delete' } ];

    return (
        <form onSubmit={formik.handleSubmit}>
            <Row>
                <TextInput label='Nombres:' name="name" id='name' s={12} m={6} l={6}
                    {...formik.getFieldProps('name')}
                    children={formik.touched.name && formik.errors.name ? (<span className="helper-text red-text">{formik.errors.name}</span>) : null}
                />
                <TextInput label='Correo:' email name="email" id='email' s={12} m={7} l={7}
                    {...formik.getFieldProps('email')}
                    children={formik.touched.email && formik.errors.email ? (<span className="helper-text red-text">{formik.errors.email}</span>) : null}
                />
                <TextInput label='Teléfono:' name="phone" id='phone' s={12} m={7} l={7}
                    {...formik.getFieldProps('phone')}
                    children={formik.touched.phone && formik.errors.phone ? (<span className="helper-text red-text">{formik.errors.phone}</span>) : null}
                />
                <Col s={12} m={6} l={6} >
                    <RadioGroup
                        label="Operación"
                        name="operacion"
                        options={operaciones}
                        value="add"
                        withGap
                        {...formik.getFieldProps('operacion')}
                    />
                </Col>
                <Button type='submit' className='col s12' disabled={!formik.isValid} >
                    Enviar
                </Button>
            </Row>
        </form>
    );
}