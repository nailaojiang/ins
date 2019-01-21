import React from 'react'
import {Row} from 'antd'
import Header from './../Header/header'
import Footer from './../Footer/footer'
export default class Indexs extends React.Component{
    render () {
        return (
            <div>
                <Header></Header>
                    <Row>
                        {this.props.children}
                    </Row>
                <Footer></Footer>
            </div>
        )
    }
}