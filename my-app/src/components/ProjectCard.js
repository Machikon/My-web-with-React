import React from 'react';


function ProjectCard(props){
    return(
        <div className="card-container">
            <div className="image-container">
                <img alt={props.name} src={props.image}/>
            </div>
            <div className='projectInfo'>
                <p className="card-title">{props.name}</p>
                <p className='detail-container'>
                <a href={props.Github}> <img src='https://icons8.com/icon/12599/github' alt='GitHub Repo'/></a>
                <a href={props.GithubPage}> <img src='https://icons8.com/icon/12599/github' alt='Applicaiton'/></a>
                </p>

            </div>
        </div>
    )
}
export default ProjectCard