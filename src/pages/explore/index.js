import React from 'react'
import './index.sass'

export default class Explore extends React.Component{
    render() {
        return (
            <div className='explore'>
                <div className='person-list'>
                    <h2>发现用户
                        <a href="/explore/people" className='common-a'>查看更多</a>
                    </h2>
                </div>
            </div>
        )
    }
}