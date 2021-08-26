import React from 'react'

function Projects({info}) {
    return (
         <div className="col-4 card">
        <a href={info.link} target='_blank' rel="noreferrer">
          <img className='image'
           src={info.image} alt=''></img>
          <div class="card-body">
            <p class="card-text">{info.name} </p>
          </div>
        </a>
        <a href={info.github} target='_blank' rel="noreferrer"><img className="gitImg" alt={info.name} src='./images/github.png'></img></a>
      </div>
    );
}

export default Projects;
