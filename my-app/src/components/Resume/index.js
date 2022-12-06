import React from 'react';


export default function Resume() {

  const onButtonClick = () =>{
    fetch('MC_resume.pdf')
    .then(res =>{
      res.blob()
      .then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'MC_resume.pdf';
        alink.click();
      })
    })
  }

    return (
      <div>
        <h1>Resume</h1>
        <p>Download my Resume in PDF</p>
    
        <h3 style={{color: 'blueviolet'}}> Front-end proficiencies</h3>
        <ul className='Front-end proficiencies'> 
            <li>HTML</li>
            <li>css</li>
            <li>Bootstrap</li>
            <li>Responsive Design</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
        </ul>

        <h3 style={{color: 'blueviolet'}}> Back-end proficiencies</h3>
        <ul className='Back-end proficiencies'>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB</li>
            <li>REST</li>
        </ul>

        <h3 style={{color: 'blueviolet'}}> Finance proficiencies</h3>
        <ul className='Finance proficiencies'>
            <li>Financial Reporting</li>
            <li>Compliance</li>
            <li>Internal and External Audit</li>
            <li>System Implementation</li>
            <li>Reconciliation</li>
        </ul>

      </div>
    );
  }