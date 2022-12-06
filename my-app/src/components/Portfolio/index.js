import React, {useState} from 'react';
import ProjectCard from '../.../components/ProjectCard';
// import Portfolio from '../../portfolio.json';
    
    //https://www.istockphoto.com/es/foto/c%C3%B3digo-de-programaci%C3%B3n-resumen-de-tecnolog%C3%ADa-de-fondo-del-desarrollador-de-software-y-gm1133924836-301129250?phrase=coding
  
    // Regex Project
    // Employee Management Tracker
    // Coding Questions
    // Work Day Scheduler
    // Node.js Professional README generator
    // eCommerce Web

    // https://github.com/Machikon/RegexProject
    // https://github.com/Machikon/EmployeeManagementTracker
    // https://github.com/Machikon/CodingQuestions
    // https://github.com/Machikon/WorkDayScheduler
    // https://github.com/Machikon/README_Project
    // https://github.com/Machikon/eCommerce_Webk

    function Wrapper(props){
      return <div className='wrapper'>{props.children}</div>;
    }
    function Portfolio(){
      const [projects] = useState([
        {
          name:'Regex Project',
          repo:'https://github.com/Machikon/RegexProject',
          link:'https://github.com/Machikon/RegexProject'
        },
        {
          name:'Employee Employee Management Tracker',
          repo:'https://github.com/Machikon/EmployeeManagementTracker',
          link:'https://github.com/Machikon/EmployeeManagementTracker'
        },
        {
          name:'Coding Questions',
          repo:'https://github.com/Machikon/CodingQuestions',
          link:'https://machikon.github.io/CodingQuestions/'
        },
        {
          name:'Workday Scheduler',
          repo:'https://github.com/Machikon/WorkDayScheduler',
          link:'https://github.com/Machikon/WorkDayScheduler'
        },
        {
          name:'RNode.js Professional README generator',
          repo:'https://github.com/Machikon/README_Project',
          link:'https://github.com/Machikon/README_Project'
        },
        {
          name:'eCommerce Web',
          repo:'https://github.com/Machikon/eCommerce_Web',
          link:'https://github.com/Machikon/eCommerce_Web'
        },
      ])

      return (
        <section className='container'>
          <Wrapper className="flex-row space-around">
            {projects.map((project,i) => (
              <ProjectCard project={project} key={'project'+i} image={project.image} name={project.name} github={project.github} githubPage={project.githubPage}/>
              ))};
          </Wrapper>
          </section>
        
            )};
      
  //       <Card style={{ width: '18rem' }}>
  //       <Card.Img variant="top" src="holder.js/100px180" />
  //       <Card.Body>
  //         <Card.Title>Regex Project</Card.Title>
  //         <Button variant="primary" href='https://github.com/Machikon/RegexProject' target="_blank">View</Button>
  //       </Card.Body>
  //     </Card>,

  //     <Card style={{ width: '18rem' }}>
  //       <Card.Img variant="top" src="holder.js/100px180" />
  //       <Card.Body>
  //         <Card.Title>Employee Employee Management Tracker</Card.Title>
  //         <Button variant="primary" href= 'https://github.com/Machikon/EmployeeManagementTracker' target="_blank">View</Button>
  //       </Card.Body>
  //     </Card>,

  //      <Card style={{ width: '18rem' }}>
  //      <Card.Img variant="top" src="holder.js/100px180" />
  //      <Card.Body>
  //        <Card.Title>Coding Questions</Card.Title>
  //        <Button variant="primary" href='https://github.com/Machikon/CodingQuestions' target="_blank">View</Button>
  //      </Card.Body>
  //    </Card>,

  //    <Card style={{ width: '18rem' }}>
  //      <Card.Img variant="top" src="holder.js/100px180" />
  //      <Card.Body>
  //        <Card.Title>Workday Scheduler</Card.Title>
  //        <Button variant="primary" href= 'https://github.com/Machikon/WorkDayScheduler' target="_blank">View</Button>
  //      </Card.Body>
  //    </Card>,
     
  //    <Card style={{ width: '18rem' }}>
  //     <Card.Img variant="top" src="holder.js/100px180" />
  //     <Card.Body>
  //       <Card.Title>Node.js Professional README generator</Card.Title>
  //       <Button variant="primary" href= 'https://github.com/Machikon/README_Project' target="_blank">View</Button>
  //     </Card.Body>
  //   </Card>,
     
  //    <Card style={{ width: '18rem' }}>
  //    <Card.Img variant="top" src="holder.js/100px180" />
  //    <Card.Body>
  //      <Card.Title>eCommerce Web</Card.Title>
  //      <Button variant="primary" href='https://github.com/Machikon/eCommerce_Web' target="_blank">View</Button>
  //    </Card.Body>
  //  </Card>

  //     )
    

    export default Portfolio;
 
  



//   return (
//     <div id="Projects">
//       <br></br>
//       <h3 className="Projects-title pt-4"></h3>

      
//     <Portfolio style={{ width: '18rem' }}>
//       <Portfolio.Img variant="top" src="holder.js/100px180" />
//       <Portfolio.Body>
//         <Portfolio.Title>Portfolio Title</Portfolio.Title>
//         <Button variant="primary">Open</Button>
//       </Portfolio.Body>
//     </Portfolio>,

//     <Portfolio style={{ width: '18rem' }}>
//       <Portfolio.Img variant="top" src="holder.js/100px180" />
//       <Portfolio.Body>
//         <Portfolio.Title>Portfolio Title</Portfolio.Title>
//         <Button variant="primary">Open</Button>
//      </Portfolio.Body>
//     </Portfolio>,

//     <Portfolio style={{ width: '18rem' }}>
//       <Portfolio.Img variant="top" src="holder.js/100px180" />
//       <Portfolio.Body>
//         <Portfolio.Title>Portfolio Title</Portfolio.Title>
//         <Button variant="primary">Open</Button>
//       </Portfolio.Body>
//     </Portfolio>,

//     <Portfolio style={{ width: '18rem' }}>
//         <Portfolio.Img variant="top" src="holder.js/100px180" />
//         <Portfolio.Body>
//           <Portfolio.Title>Portfolio Title</Portfolio.Title>
//           <Button variant="primary">Open</Button>
//        </Portfolio.Body>
//     </Portfolio>,

//     <Portfolio style={{ width: '18rem' }}>
//       <Portfolio.Img variant="top" src="holder.js/100px180" />
//       <Portfolio.Body>
//         <Portfolio.Title>Portfolio Title</Portfolio.Title>
//         <Button variant="primary">Open</Button>
//       </Portfolio.Body>
//     </Portfolio>,

//     <Portfolio style={{ width: '18rem' }}>
//       <Portfolio.Img variant="top" src="holder.js/100px180" />
//       <Portfolio.Body>
//         <Portfolio.Title>Portfolio Title</Portfolio.Title>
//         <Button variant="primary">Open</Button>
//       </Portfolio.Body>
//     </Portfolio>
//   );
// }

