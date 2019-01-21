import React from 'react'


export default class Person extends React.Component{
    render () {
        console.log(this.props)
        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}