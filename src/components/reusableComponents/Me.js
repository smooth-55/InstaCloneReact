import React from 'react'

function Me(props) {
  const { ProfileImage, UserName, FullName } = props

  return (
    <div className='container' style={{display:"flex", justifyContent:"space-between", alignItems:"center" , padding:"10px"}}>
    <div className='main__content' style={{display:"flex", justifyContent:"flex-start", alignItems:"center" , padding:"10px"}}>
      <div className='me'>
        <img src={ProfileImage} alt="me" style={{ objectFit: "cover", width: "60px", height: "60px", borderRadius: "60px" }} />
      </div>
      <div className="info" style={{display:"flex", flexDirection:"column", padding:"10px",alignItems:"flex-start",  marginLeft:"0.5rem"}} >
        <h5 style={{marginBottom:"4px", fontSize:"0.9rem"}}>{UserName}</h5>
        <h5 style={{fontSize:"1rem", color:"gray"}}>{FullName}</h5>
      </div>
    </div>

      
      <div>
        <p style={{color:"rgb(0, 149, 246)"}}>Switch</p>
      </div>
    </div>
  )
}

export default Me