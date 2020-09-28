import React from 'react';
import { Col, Row, Card, Icon, CardTitle, Collapsible, CollapsibleItem } from 'react-materialize';
import { Services } from '../services/users.service';

export function PanelUsuarios(props) {
    function getUsuario() {
        Services.getUsers(({ data }) => {
            localStorage.setItem("usersVacanT", JSON.stringify(data));
            users = data;
        }, (error) => {

        });
    }

    getUsuario();

    const users = JSON.parse(localStorage.getItem("usersVacanT"));

    return (
        <Row>
            {users.map((user) => {
                const { id, name, phone, address } = user;
                return (

                    <Collapsible
                        accordion
                        popout
                    >
                        <CollapsibleItem
                            expanded={false}
                            header={`# ${id}: ${name}`}
                            icon={<Icon>account_circle</Icon>}
                            node="div"
                        >
                            <Row><p><Icon>place</Icon>Dirección:</p>
                                <ul>
                                    <li>Barrio: {address.street}</li>
                                    <li>Apartamento: {address.suite}</li>
                                </ul>
                            </Row>
                        </CollapsibleItem>
                    </Collapsible>
                );
            })}
        </Row>
    );
}
