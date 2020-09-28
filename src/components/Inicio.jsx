import React from 'react';
import { Container } from 'react-materialize';
import { UserForm }  from './UserForm';
import { PanelUsuarios } from './PanelUsuarios';

export function Inicio () {
    return (
        <Container>
            <UserForm />
            <PanelUsuarios />
        </Container>
    );
}