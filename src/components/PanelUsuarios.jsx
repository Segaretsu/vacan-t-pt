import React from 'react';
import { Col, Row, Card, Icon, CardTitle } from 'react-materialize';
import { Services } from '../services/users.service';

export function PanelUsuarios(props) {
    function getUsuario() {
        Services.getUsers(({ data }) => {
            if (localStorage.getItem("usersVacanT")) {
                localStorage.setItem("usersVacanT", JSON.stringify(data));
            }
        }, (error) => {

        });
    }

    getUsuario();

    const users = JSON.parse(localStorage.getItem("usersVacanT"));

    return (
        <Row>
            {/* {users.map((user) => {
                const { id, name, phone, address } = user;
                return (
                    <Col s={6} m={4}>
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle reveal waves="light" />}
                            reveal={<Row><p>Dirección:</p>
                                <ul>
                                <li>Barrio: {address.street}</li>
                                <li>Apartamento: {address.suite}</li>
                                </ul>
                            </Row>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title={`# ${id}: ${name}`}
                        >
                            <p>
                                Teléfono: {phone}
                            </p>
                        </Card>
                    </Col>
                );
            })} */}
        </Row>
    );
}