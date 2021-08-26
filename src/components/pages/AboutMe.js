import React from 'react'

function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
        <img src={`${process.env.PUBLIC_URL}/headshot.JPG`}  alt="Jessica Giannini"/>
        <p>After spending nearly a decade touring the nation as a full time musician Jessica Giannini brings an array of talents. She knows how to manage a team, guide a project to great heights, and is always thinking outside the box. She is a strong communicator. All of her paths have finally lead her to the world of programming. She is ready to learn and happy to assist.</p>
        </div>
    );
}

export default AboutMe;
