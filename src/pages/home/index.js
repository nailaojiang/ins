import React from 'react'
import './home.sass'
import '../../unit/unit'
import Loading from '../../component/loading'
export default class Home extends React.Component{
    render () {
        let a = 1234567;
        let html = [1,2,3,4,5,6,7,8,9]
        let htmls = [1,2,3]
        return (
            <main className='container'>
                <section className='item'>
                    <div className='item-left'>
                        {
                            html.map((item)=> {
                                return <div className='topic'>
                                    <div className='topic-header'>
                                        <div className='user-img'>
                                            <img src="http://image.xiantians.com/44884218_345707102882519_2446069589734326272_n.jpg" alt=""/>
                                        </div>
                                        <div className='user-name'>
                                            <a href="https://xiantians.com">cheese</a>
                                        </div>
                                    </div>
                                    <div className='topic-middle'>
                                        <img src="https://image.kmeila.com/c2032d9a06aa8bb8ab1e1f0c6c7557ea_1485x1027.jpg" alt="梦想"/>
                                    </div>
                                    <div className='topic-footer'>
                                        <div className='handler'>
                                            <button className='btn-none-styl'>
                                                <span className='love ins'></span>
                                            </button>
                                            <button className='btn-none-styl'>
                                                <span className='comment ins'></span>
                                            </button>
                                            <button className='btn-none-styl'>
                                                <span className='sharp ins'></span>
                                            </button>
                                            <button className='btn-none-styl mlauto'>
                                                <span className='remove ins'></span>
                                            </button>
                                        </div>
                                        <div className='zan-num'>
                                            {
                                                a.formatMoney()
                                            }
                                        </div>
                                        <div className='news'>
                                            <h2>
                                                <a className='common-a' href="">
                                                    cheese
                                                </a>
                                                <span>
                                            First Sunday of 2019! Reflecting on all my New year resolutions.. How is everyone else doing??
                                        </span>
                                            </h2>
                                        </div>
                                        <div className='load-more'>加载更多评论</div>
                                        <div className='common-list'>
                                            <ul className='clearfix'>
                                                <li>
                                                    <a className="u-name common-a">
                                                        cheese
                                                    </a>
                                                    <span className='u-content'>
                                                somewhere between feeding to being a food
                                            </span>
                                                    <span className='u-love ins'></span>
                                                </li>
                                                <li>
                                                    <a className="u-name common-a">
                                                        cheese
                                                    </a>
                                                    <span className='u-content'>
                                                somewhere between feeding to being a food
                                            </span>
                                                    <span className='u-love ins'></span>
                                                </li>
                                                <li>
                                                    <a className="u-name common-a">
                                                        cheese
                                                    </a>
                                                    <span className='u-content'>
                                                somewhere between feeding to being a food
                                            </span>
                                                    <span className='u-love ins'></span>
                                                </li>
                                                <li>
                                            <span className='u-left'>
                                                <a className="u-name common-a">
                                                    cheese
                                                </a>
                                                <span className='u-content'>
                                                    somewhere between feeding to being a foodsomewhere between feeding to being a foodsomewhere between feeding to being a foodsomewhere between feeding to being a food
                                                </span>
                                            </span>
                                                    <span className='u-love ins'></span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='send-time'>
                                            <a href="" className='common-a'>
                                                1天前
                                            </a>
                                        </div>
                                        <div className='send-input'>
                                            <textarea placeholder='添加评论...' className='textarea' name="" id="" cols="30" rows="10"></textarea>
                                        </div>
                                        <div className='u-sharp'>

                                        </div>
                                    </div>
                                </div>
                            })
                        }
                        <Loading></Loading>
                    </div>
                    <div className='item-right'>
                        <div className='right-content'>
                            <div className='right-header'>
                                <div className='right-header-img'>
                                    <img src="http://image.xiantians.com/44884218_345707102882519_2446069589734326272_n.jpg" alt=""/>
                                </div>
                                <div className='right-u-content common-bj'>
                                    <div className='right-u-id common-bj'>
                                        <a href="https://xiantians.com" className='common-a'>nailaojiang</a>
                                    </div>
                                    <div className='right-u-name'>cheese</div>
                                </div>
                            </div>
                            <div className='right-quick-item'>
                                <div className='right-quick-header'>
                                    <div className='quick-header-title'>
                                        快拍
                                    </div>
                                    <a href="https://xiantians.com" className='common-a'>
                                        全部播放
                                    </a>
                                </div>
                                <div className='right-quick-footer'>
                                    <div className='quick-footer-person'>
                                        <div className='footer-person-box'>
                                            {
                                                html.map((item)=> {
                                                    return <div className='person-item'>
                                                        <div className='person-item-left'>
                                                            <img width='44px' height='44px' src="http://image.xiantians.com/44884218_345707102882519_2446069589734326272_n.jpg" alt=""/>
                                                        </div>
                                                        <div className='person-item-right'>
                                                            <div className='person-right-top'>
                                                                nailaojiang1
                                                            </div>
                                                            <div className='person-right-bottom'>
                                                                3天前
                                                            </div>
                                                        </div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='right-quick-item' style={{marginTop: '12px'}}>
                                <div className='right-quick-header'>
                                    <div className='quick-header-title'>
                                        为你推荐
                                    </div>
                                    <a href="https://xiantians.com" className='common-a'>
                                        查看全部
                                    </a>
                                </div>
                                <div className='right-quick-footer'>
                                    <div className='quick-footer-person' style={{height: '162px',overflow:'hidden'}}>
                                        <div className='footer-person-box'>
                                            {
                                                htmls.map((item)=> {
                                                    return <div className='person-item' >
                                                        <div className='person-item-left'>
                                                            <img width='44px' height='44px' src="http://image.xiantians.com/44884218_345707102882519_2446069589734326272_n.jpg" alt=""/>
                                                        </div>
                                                        <div className='person-item-right'>
                                                            <div className='person-right-top'>
                                                                nailaojiang1
                                                            </div>
                                                            <div className='person-right-bottom'>
                                                                3天前
                                                            </div>
                                                        </div>
                                                        <div className='follow'>
                                                            关注
                                                        </div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}