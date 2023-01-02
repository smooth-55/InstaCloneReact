
import React from 'react'
import Feed from "../Feed";
import Header from "../Header";
import StoryHeader from '../StoryHeader';
import HomeRightSection from '../HomeRightSection';

function Home() {
    return (
        <div className="App" style={{ backgroundColor: "rgba(250,250,250,1)", }} >
            <Header />

            <div className="containter" style={{ backgroundColor: "rgba(250,250,250,1)", }}>
                <div className="main__content" style={{ display: "flex", justifyContent: "center", backgroundColor: "rgba(250,250,250,1)" }}>

                    <div className="left_feed__content" style={{
                        // backgroundColor: "red",
                        width: "35vw",
                        marginLeft: "-25rem",
                        marginTop: "6rem",
                        marginBottom: "1rem"
                        
                    }}>

                        <StoryHeader />

                        <Feed UserName="test username" UserImg="" />
                        <Feed UserName="test username" UserImg="" />
                        <Feed UserName="test username" UserImg="" />
                        <Feed UserName="test username" UserImg="" />
                        <Feed UserName="test username" UserImg="" />

                    </div>
                    <div className="right__content" style={{
                        // backgroundColor: "rgba(239,239,239,1)", //should be comment out
                        width: "25vw",
                        height: "55vh",
                        position: "fixed",
                        right: "300px",
                        marginTop: "6rem",
                    }}>

                        <HomeRightSection/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home

