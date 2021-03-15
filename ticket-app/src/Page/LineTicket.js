import React, {useContext, useState, useEffect} from 'react'
import { Typography, Space, Row, Col, List, Card, Tag, Divider } from 'antd';
import {SocketContext} from "../context/SocketContext";
import {useHideMenu} from "../hooks/useHideMenu";
import {getLast} from "../helpers/getLast";
const { Title, Text } = Typography;

export const LineTicket = () =>{
    //Hide Menu Lateral
    useHideMenu(false);
    const {socket} = useContext(SocketContext)
    const [tickets,setTickets] = useState([])

    useEffect(()=>{
        socket.on('send_ticket-list', (assigned)=>{
            console.log(assigned)
            setTickets(assigned)
        })
        return () =>{
            socket.off('send_ticket-list')
        }
    },[socket])

    useEffect(()=>{
        getLast().then(data=>setTickets(data.last))
    },[])

    return(<>
        <Title level={3}>Atendiendo a cliente</Title>
        <Space/>
        <Row>
            <Col span={12}>
                <List
                    dataSource={tickets.slice(0,3)}
                    renderItem={item=>(
                        <List.Item>
                            <Card
                                style={{width: 300, marginTop: 16}}
                                actions={[
                                    <Tag color="volcano">{item.agent}</Tag>,
                                    <Tag color="magenta">Escritorio: {item.desktop}</Tag>
                                ]}
                            >
                                <Title level={2}>{`No. ${item.number}`}</Title>
                            </Card>
                        </List.Item>
                    )}
                />
            </Col>
            <Col span={12}>
                <Divider>
                    Historia
                </Divider>
                <List
                    dataSource = {tickets.slice(0,3)}
                    renderItem = {
                        item => (
                            <List.Item>
                                <List.Item.Meta
                                    title = {`Ticket No. ${item.number}`}
                                    description = {
                                        <>
                                            <Text type="secondary">En el escritorio: </Text>
                                            <Tag color="magenta">{item.desktop}</Tag>
                                            <Text type="secondary">Agente: </Text>
                                            <Tag color="volcano">{item.agent}</Tag>
                                        </>
                                    }
                                >
                                </List.Item.Meta>
                            </List.Item>
                        )
                    }
                >

                </List>

            </Col>
        </Row>
        </>)
}
