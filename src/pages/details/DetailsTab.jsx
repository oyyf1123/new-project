import React from 'react'
const DetailsTab = props => {

    
    const goBack = () => {
        props.history.go( -1 )
    }


    

    return (
        <header className="details-header">
            <div className="go-back" onClick = { goBack }> <i className="iconfont icon-zuojiantou1"></i> </div>
            <h3> 马尾松 </h3>
        </header>
    )
}
export default DetailsTab