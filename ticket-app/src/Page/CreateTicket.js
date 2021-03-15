import React, { useContext, useState} from 'react'
import { Row, Col, Button, Typography } from 'antd';
import {DownCircleOutlined} from "@ant-design/icons";
import {useHideMenu} from "../hooks/useHideMenu";
import {SocketContext} from "../context/SocketContext";

const { Title, Text } = Typography;
export const CreateTicket = () =>{
    //Hide Menu Lateral
    useHideMenu(true);

    const [ticket, setTiket] = useState(null)

    const {socket} = useContext(SocketContext);

    const newTicket = () => {
        socket.emit('reserve_ticket', null, (ticket) => {
            setTiket(ticket)
        })
    }
    return(
        <>
            <Row>
                <Col span={14} offset={6} align="center" >
                    <Title level={4}>
                        Presionen el botom para un nuevo ticket
                    </Title>
                    <Button
                        type="primary"
                        shape="round"
                        icon={<DownCircleOutlined/>}
                        size="large"
                        onClick={newTicket}
                    >
                        Nuevo Ticket
                    </Button>
                </Col>
            </Row>
            <Row style={{marginTop: 100}}>
                <Col span={14} offset={6} align="center">
                    <Text level={2}>
                        Sú número
                    </Text>
                    <br/>
                    {
                        ticket && (
                            <Text type="success"  style={{fontSize: 55}}>
                                {ticket.number}
                            </Text>
                        )
                    }
                </Col>
            </Row>
            </>
    )
}
