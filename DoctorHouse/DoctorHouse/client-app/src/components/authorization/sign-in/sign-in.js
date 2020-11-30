import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
class SignIn extends Component {

    render() {
        return (
            <Row type="flex" justify="center" align="center">
                <Col span={4} >
                <Title align="center" level={2}>Sign in</Title>
                    <Form style={{ width: 240 }}>
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default SignIn;