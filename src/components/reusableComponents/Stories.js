// import { Image } from '@material-ui/icons'
import React from 'react'

function Stories(props) {
  return (
    <div className='story__header' style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center", margin:"5px 0px 0px 5px"}}>
        <div className="image__ico" width='22px' style={{border:"0.1px solid red", borderRadius:"70px", padding:"4px", display:"flex", justifyContent:"center"}}>
            <img src="https://media.istockphoto.com/photos/nepal-picture-id530450181" style={{ border:"5.2px solid #f09433;",objectFit:"cover", width:"50px", height:"50px", borderRadius:"60px"}}></img>
        </div>
        <div className="image__user"> <p style={{fontSize:"13px",}} >username</p></div>
    </div>
  )
}

export default Stories