import React from 'react'
import { Link } from 'react-router-dom'
const EcotopeItem = props => {
    return (
        <ul className="ecotope-list-wrap">
            <li className="item">
                <Link to = "/details">
                    <div className="tree-img">
                        <img src="http://img0.imgtn.bdimg.com/it/u=2572658401,4266524865&fm=26&gp=0.jpg" alt=""/>
                    </div>
                    <div className='tree-info'>
                        <h3> 黄山迎客松 </h3>
                        <p> 累计领养10000棵 </p>
                        <div className = "pic"> 30.00元/棵 </div>
                    </div>
                    <div className = "want-to-adopt">
                        <span className = "want-to-adopt-btn">
                            我要认养
                        </span>
                    </div>
                </Link>
            </li>
        </ul>
    )
}

export default EcotopeItem