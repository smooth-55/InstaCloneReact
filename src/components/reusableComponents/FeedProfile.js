import React from 'react'

function FeedProfile(props) {
    const { ImageSrc, UserName } = props
    return (
        <div className='feed__user_profile' style={{ display: "flex", justifyContent:"space-between", overflowX: "hidden", overflowY:"hidden", paddingLeft: "10px" }}>
            <div className="feed__left_profile" style={{ display: "flex", alignItems: "center", overflowX: "hidden", paddingLeft: "10px", cursor:"pointer" }}>
                <img src={ImageSrc} style={{ height: "3.5rem", width: "3.5rem", border: "2px solid blue", borderRadius: "5rem", padding: "3px", marginRight: "10px" }}></img>
                <p style={{ fontSize: "1.3rem" }}>{UserName}</p>
            </div>
            <div className="feed__right_menu" style={{overflowX: "hidden", marginRight: "1rem" }}>
                <h2 style={{cursor:"pointer"}}>...</h2>
            </div>
        </div>
    )
}

export default FeedProfile