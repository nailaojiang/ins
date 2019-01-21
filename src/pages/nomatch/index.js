import React from 'react'
export default class NoMatch extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div style={{textAlign: 'center',fontSize: '24'}}>
                404 Not Found
            </div>
        )
    }
}