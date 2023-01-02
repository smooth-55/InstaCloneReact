import React from 'react'
import Stories from './reusableComponents/Stories'
function StoryHeader() {
  return (
    <div
    className="story__secion" 
    style={{
      height:"10vh",
      border:"2px solid rgba(219,219,219,1)",
      borderRadius:"18px",
      display:"flex",
      padding:"5px",
      gap:"10px",
      overflowX:"scroll",
    }}
    >
     <Stories name="Your Story"/>
     <Stories/>
     <Stories/>
     <Stories/>
     <Stories/>
     <Stories/>
     <Stories/>
     <Stories/>
     <Stories/>
     <Stories/>
     <Stories/>
     <Stories/>
    </div>
  )
}

export default StoryHeader