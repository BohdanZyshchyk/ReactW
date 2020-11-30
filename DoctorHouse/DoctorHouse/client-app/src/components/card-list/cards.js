import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import MyCard from '../card/card';
const { Meta } = Card;
class CardList extends Component {
    state = {}
    render() {
        return (
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <MyCard></MyCard>
                    </Col>
                    <Col span={8}>
                        <MyCard></MyCard>
                    </Col>
                    <Col span={8}>
                        <MyCard></MyCard>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CardList;