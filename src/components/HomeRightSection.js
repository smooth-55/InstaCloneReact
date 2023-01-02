import React from 'react'
import HomeRightFooter from './reusableComponents/HomeRightFooter';
import Suggestions from "./reusableComponents/Suggestions";
import Me from "./reusableComponents/Me";


function HomeRightSection() {
  return (
    <div className='right__section'>
      <Me ProfileImage="https://i.guim.co.uk/img/media/1167ca0f16694ed2b9e9815258bdb4e5e681f762/0_164_4927_2956/master/4927.jpg?width=620&quality=85&auto=format&fit=max&s=fbd8cabb6574ad9509699dc4e432e750" UserName="elon_musk" FullName="Elon Musk"/>
      <div style={{display:"flex", justifyContent:"space-between", margin:"0px 10px 0px 10px"}}>
      <h3 style={{ fontSize:"1rem", color:"#8e8e8e"}}>Suggestions for you</h3>
      <h4 style={{fontSize:"0.9em"}}>See all</h4>
      </div>
      <Suggestions ProfileImage="https://i.guim.co.uk/img/media/1167ca0f16694ed2b9e9815258bdb4e5e681f762/0_164_4927_2956/master/4927.jpg?width=620&quality=85&auto=format&fit=max&s=fbd8cabb6574ad9509699dc4e432e750" UserName="smooth_404" SuggestionType="ram and 20+"/>
      <Suggestions ProfileImage="https://i.guim.co.uk/img/media/1167ca0f16694ed2b9e9815258bdb4e5e681f762/0_164_4927_2956/master/4927.jpg?width=620&quality=85&auto=format&fit=max&s=fbd8cabb6574ad9509699dc4e432e750" UserName="smooth_404" SuggestionType="ram and 20+"/>
      <Suggestions ProfileImage="https://i.guim.co.uk/img/media/1167ca0f16694ed2b9e9815258bdb4e5e681f762/0_164_4927_2956/master/4927.jpg?width=620&quality=85&auto=format&fit=max&s=fbd8cabb6574ad9509699dc4e432e750" UserName="smooth_404" SuggestionType="ram and 20+"/>
      <Suggestions ProfileImage="https://i.guim.co.uk/img/media/1167ca0f16694ed2b9e9815258bdb4e5e681f762/0_164_4927_2956/master/4927.jpg?width=620&quality=85&auto=format&fit=max&s=fbd8cabb6574ad9509699dc4e432e750" UserName="smooth_404" SuggestionType="ram and 20+"/>
      <HomeRightFooter/>
    </div>
  )
}

export default HomeRightSection