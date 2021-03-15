import React, {useState, useContext} from 'react'
import {Row, Col, Button, Divider, Typography} from 'antd';
import {ArrowRightOutlined, CloseCircleOutlined} from "@ant-design/icons";
import {useHideMenu} from "../hooks/useHideMenu";
import {getUserStorage} from "../helpers/getUserStorage";
import {Redirect} from "react-router-dom";
import {SocketContext} from "../context/SocketContext";

const {Title, Text} = Typography;

export const Desktop = () => {

    //Hide Menu Lateral
    useHideMenu(false)

    const [user] = useState(getUserStorage())
    const {socket} = useContext(SocketContext)
    const [ticket, setTicket] = useState({})

    const exit = () => {
        console.log('Salir');
    }
    const nextTicket = () => {
        socket.emit('next-ticket-desktop', user, (ticket) => {
            setTicket(ticket)
        })
    }

    if (!user.username && !user.desktop) {
        return <Redirect to="/"/>
    }
    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>{user.username}</Title>
                    <Text>Usted esta trabajando en el escritorio: </Text>
                    <Text type="success"> {user.desktop} </Text>
                </Col>
                <Col span={4} align="right">
                    <Button
                        shap="round"
                        type="danger"
                        onClick={exit}
                    >
                        <CloseCircleOutlined/>
                        Salir
                    </Button>
                </Col>
            </Row>
            <Divider/>
            {ticket && (<Row>
                    <Col>

                        <Text>Esta atendiendo el ticket número: </Text>
                        <Text
                            style={{fontSize: 20}}
                            type="danger"
                        >
                            {ticket.number}
                        </Text>
                    </Col>
                </Row>

            )}

            <Row>
                <Col offset={18} span={6} align="right">
                    <Button
                        onClick={nextTicket}
                        shape="round"
                        type="primary"
                    >
                        Siguiente
                        <ArrowRightOutlined/>
                    </Button>
                </Col>
            </Row>
        </>
    )
}
