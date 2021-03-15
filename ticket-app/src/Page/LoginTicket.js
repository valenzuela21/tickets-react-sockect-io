import React, {useState} from 'react'
import {useHistory, Redirect} from 'react-router-dom'
import {Form, Input, Button, InputNumber, Typography, Divider} from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import {useHideMenu} from "../hooks/useHideMenu";
import {getUserStorage} from "../helpers/getUserStorage";
const { Title, Text } = Typography;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 14,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 14,
    },
};

export const LoginTicket = () =>{

    const history = useHistory();
    const [user] = useState(getUserStorage())

    //Hiden Menu Lateral
    useHideMenu(false)

    const onFinish = ({username, desktop}) => {
        localStorage.setItem('username', username)
        localStorage.setItem('desktop', desktop)
        history.push('/desktop')
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    if(user.username && user.desktop){
        return <Redirect to="/Desktop"/>
    }
    return(
        <>
            <Title level={2}>Ingresar</Title>
            <Text>Ingresa su nombre y número de escritorio</Text>
            <Divider/>
        <Form
        {...layout}
        name="basic"
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
    >
        <Form.Item
            label="Nombre Agente"
            name="username"
            rules={[
                {
                    required: true,
                    message: 'Por favor ingrese su nombre',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Número Escritorio"
            name="desktop"
            rules={[
                {
                    required: true,
                    message: 'Ingresa el numero de escritorio',
                },
            ]}
        >
            <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item {...tailLayout}>
            <Button
                type="primary"
                htmlType="submit"
                shape="round"
            >
                <SaveOutlined /> Ingresar
            </Button>
        </Form.Item>
    </Form>
            </>)
}
