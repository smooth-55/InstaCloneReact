import React from 'react'
import Search from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

function Header() {
  return (
      <div className='main__header' style={{
       
        position: "fixed",
        top: "0px",
        padding:"10px",
        backgroundColor: "#ffffff",
        overflow: "hidden",
        width:"100vw"
      }}>
        <div className="test" style={{ display: "flex",
        justifyContent: "space-evenly"}}>
        <div className="header__icon">
          <h2>Instagram</h2>
        </div>
        <div className="header__search_bar" style={{
          display: "flex",
          alignItems: "center",
          borderRadius: "8px",
          backgroundColor: "#efefef",
        }}>
          <Search style={{ marginLeft: "15px", color: "gray" }} />
          <input type="text" placeholder='Search' style={{
            outline: "none",
            padding: "10px",
            borderRadius: "8px",
            width: "16rem",
            backgroundColor: "#efefef",
            fontSize: "16px",
          }} />
        </div>
        <div className="header__buttons">
          <HomeIcon style={{ marginRight: "12px", fontSize: "30px", cursor: "pointer" }} />
          <SendIcon style={{ marginRight: "12px", fontSize: "30px", cursor: "pointer" }} />
          <AddBoxOutlinedIcon style={{ marginRight: "12px", fontSize: "30px", cursor: "pointer" }} />
          <ExploreOutlinedIcon style={{ marginRight: "12px", fontSize: "30px", cursor: "pointer" }} />
          <FavoriteBorderRoundedIcon style={{ marginRight: "12px", fontSize: "30px", cursor: "pointer" }} />
          <AccountCircleOutlinedIcon style={{ marginRight: "12px", fontSize: "30px", cursor: "pointer" }} />
        </div>

      </div>
      <hr  style={{
    color: '#dbdbdb',
    backgroundColor: '#dbdbdb',
    marginTop:"11px",
    marginBottom:"-10px",
    height: 1,
    borderColor : '#dbdbdb'
}}/>
      </div>
  )
}

export default Header