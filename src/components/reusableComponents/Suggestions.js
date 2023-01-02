import React from 'react'

function Suggestions(props) {
  const { ProfileImage, UserName, SuggestionType } = props

  return (
      <div className='container' style={{ display: "flex", justifyContent: "space-between", alignItems: "center",  margin:"0.5rem 0rem 0.5rem 1rem", }}>
        <div className='main__content' style={{ display: "flex", justifyContent:"flex-start", alignItems: "center", }}>
          <div className='me' >
            <img src={ProfileImage} alt="me" style={{ objectFit: "cover", width: "40px", height: "40px", borderRadius: "60px"}} />
          </div>
          <div className="info" style={{ display: "flex", flexDirection: "column", alignItems:"flex-start", margin:"0px 0px 0px 10px"}} >
            <h5 style={{ marginBottom: "4px", fontSize: "0.9rem" }}>{UserName}</h5>
            <p style={{ fontSize: "0.7rem", color: "gray" }}>{SuggestionType}</p>
          </div>
        </div>
        <div>
          <p style={{ color: "rgb(0, 149, 246)", marginRight:"10px"}}>Follow</p>
        </div>
      </div>
  )
}

export default Suggestions