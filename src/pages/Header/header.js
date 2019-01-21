import React from 'react'
import './header.sass'
import {Link} from 'react-router-dom'

export default class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            showInput: 'none',
            search: '',
            focus: false,
            leaveTop: 0
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
    handleScroll(e) {
        let top = e.path[1].scrollY
        if (this.state.leaveTop === 0 && e.path[1].scrollY > 0) {
            this.setState({
                leaveTop: top
            })
        }else if(this.state.leaveTop > 0 && e.path[1].scrollY === 0) {
            this.setState({
                leaveTop: 0
            })
        }

    }
    showInputHandler=(e) => {
        console.log(1)
        this.setState({
            showInput: 'block'
        })
        setTimeout(() => {
            this.refs.myInput.focus()
        }, 20)
    }
    handlerSearch=(e) => {
        console.log(e.target.value)
        this.setState({
            search: e.target.value
        })
    }
    blurHandler = () => {
        this.setState({
            showInput: 'none'
        })
    }
    InputBlurHandler = () =>{
        this.setState({
            search: ''
        })
    }
    render () {
        return (
            <div className='header-box'>
                <div className={`header-fill ${this.state.leaveTop === 0 ? '': 'h52'}`}></div>
                <nav className='header clearfix'>
                    <div className={`header-content ${this.state.leaveTop === 0 ? '': 'h52'}`}>
                        <div className={`search-box ${this.state.leaveTop === 0 ? '': 'h28 pd20'}`}>
                            <div className='logo'>
                                <a href="/">
                                    <span className='icon-logo ins'></span>
                                    <div className='logo-line'></div>
                                    <div className='logo-text ins'></div>
                                </a>
                            </div>
                            <div className='search'>
                                <input className="search-input"
                                       style={{'display': this.state.showInput}}
                                       type="text"
                                       onBlur={this.blurHandler}
                                       onChange={this.handlerSearch}
                                       placeholder="搜索"
                                       value={this.state.search}
                                       ref='myInput'
                                />
                                <span className='search-icon mock-icon ins-icon' style={{'display': this.state.showInput}}></span>
                                <div className='search-close ins-icon' onClick={this.InputBlurHandler} style={{'display': this.state.showInput}}></div>
                                <div className='search-mock' onClick={this.showInputHandler} style={{'display': this.state.showInput === 'none' ? 'block' : 'none' }}>
                                    <div className='search-mock-content'>
                                        <span className='mock-icon mr6 ins-icon'></span>
                                        <span className='mock-text'>搜索</span>
                                    </div>
                                </div>
                            </div>
                            <div className='person'>
                                <div className='dynamic'>
                                    <div className='compass ins'>
                                        <Link to='/explore'>
                                            <span></span>
                                        </Link>
                                    </div>
                                    <div className='mylove ins'>
                                        <a href="http://www.xiantians.com">
                                            <span></span>
                                        </a>
                                    </div>
                                    <div className='user ins'>
                                        <a href="http://www.xiantians.com">
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}