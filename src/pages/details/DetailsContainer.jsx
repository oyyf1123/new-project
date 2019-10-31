import React, { Component } from 'react'

class DetailsContainer extends Component {
    render () {
        return (
            <div className="details-container">
                <div className = "details-wrap">
                    <div className="details-banner">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=224663708,1374251063&fm=26&gp=0.jpg" alt="" />
                    </div>
                    <div className="trees-info">
                        <h3> 树木简介 </h3>
                        <p> 五岳归来不看山，黄山归来不看岳。倚空高槛冷无尘，往事闲徵梦欲分。翠色本宜霜后见，寒声偏向月中闻。啼猿想带苍山雨，归鹤应和紫府云。莫向东园竞桃李，春光还是不容君。——《松》【唐】韩溉</p>
                    </div>
                    <div className="trees-details">
                        <h3> 树木详情 </h3>
                        <div className = "img-box">
                            <div className = "item-img">
                                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1639943748,134988900&fm=26&gp=0.jpg" alt="" />
                                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1651471193,1835385468&fm=15&gp=0.jpg" alt="" />
                                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2924070633,4016151906&fm=26&gp=0.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsContainer