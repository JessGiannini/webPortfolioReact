import React from 'react'
import Projects from "../Projects";
import '../Projects.css';


function Portfolio() {
    var projectsinfo = [
    {name: 'Feed Your Boredom', link:'https://jessgiannini.github.io/FeedYourBoredom/', image:'./images/feedyourboredom.png', github:'https://github.com/JessGiannini/FeedYourBoredom'},

    {name: 'Reciplease', link:'https://jessgiannini.github.io/Reciplease/', image:'./images/reciplease.png', github:'https://github.com/JessGiannini/Reciplease'},

    {name: 'Fitness Tracker', link:'https://afternoon-spire-51413.herokuapp.com/?id=611d3c8e6027fd00162f50bc', image:'./images/fitnesstracker.png', github:'https://github.com/JessGiannini/trackYourFitness'},

    {name: 'Protect Your Business', link:'https://jessgiannini.github.io/ProtectYourBusiness/', image:'./images/password.png', github:'https://github.com/JessGiannini/ProtectYourBusiness'},

    {name: 'Regex Gist', link:' https://gist.github.com/JessGiannini/e19112d5f17552711ef3d4abb85b7410', image:'./images/RegEx.png', github:' https://gist.github.com/JessGiannini/e19112d5f17552711ef3d4abb85b7410'},

    {name: 'Quiz Me', link:'https://jessgiannini.github.io/QuizMe/', image:'./images/codeQuiz.png', github:'https://github.com/JessGiannini/QuizMe'}
  ]

    return (
      <div class="container">
      <h2>My Work</h2>
        <div class="row">
          {projectsinfo.map((info,index) => {
        return <Projects key={index} info={info}/>
      })}
        </div>
      </div>
    );
}

export default Portfolio;
