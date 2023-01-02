import React from 'react'

function HomeRightFooter() {
    return (
        <div className='main__footer' style={{display:"flex", flexDirection:"column", alignItems:"flex-start", marginTop:"1.2rem"}}>
            <div style={{display:"flex", flexDirection:"row", gap:"6px", marginLeft:"10px"}}>
                <p style={{fontSize:"0.8rem" , color:"gray", cursor:"pointer"}} >About</p>
                <p style={{fontSize:"0.8rem" , color:"gray", cursor:"pointer"}} >Help</p>
                <p style={{fontSize:"0.8rem" , color:"gray", cursor:"pointer"}} >Press</p>
                <p style={{fontSize:"0.8rem" , color:"gray", cursor:"pointer"}} >API</p>
                <p style={{fontSize:"0.8rem" , color:"gray", cursor:"pointer"}} >Jobs</p>
                <p style={{fontSize:"0.8rem" , color:"gray", cursor:"pointer"}} >Privacy</p>
                <p style={{fontSize:"0.8rem" , color:"gray", cursor:"pointer"}} >Terms</p>
            </div>
            <div style={{display:"flex", flexDirection:"row", gap:"6px", margin:"6px 0px 0px 10px"}}>
                <p style={{fontSize:"0.8rem" , color:"gray", cursor:"pointer"}}>Locations</p>
                <p style={{fontSize:"0.8rem" , color:"gray", cursor:"pointer"}}>Language</p>
            </div>
            <div style={{display:"flex", flexDirection:"row", gap:"6px", margin:"1rem 0px 0px 10px"}}>
                <p style={{fontSize:"0.9rem", color:"gray" }}>
                    © 2022 INSTAGRAM FROM META</p>
            </div>
        </div>
    )
}

export default HomeRightFooter