import React from 'react'
import FeedProfile from './reusableComponents/FeedProfile'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Feed(props) {
  const {UserName, UserImg} = props
  return (
  <div className='feed__container' style={{height:"45rem", display:"flex", flexDirection:"column"}}>
    <div className='feed' style={{border:"1px solid #dbdbdb",borderRadius:"0.4rem 0.4rem 0rem 0rem",height:"4rem", marginTop:"1.2rem", padding:"7px 0px 10px 0px", } }>
        <FeedProfile UserName="test user" ImageSrc='https://images.unsplash.com/photo-1598191240696-6bd4e913ae34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'/>
        {/* <AccountCircleIcon style={{position:"relative", top:"600", zIndex:"10"}}/> */}
    </div>
    <div className="feed__content"style={{border:"1px solid #dbdbdb", height:"41rem", borderRadius:"0rem 0rem 0.4rem 0.4rem"} } >

    </div>
  </div>
  )
}

export default Feed