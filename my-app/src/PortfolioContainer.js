import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/portfolio';
import Contact from './pages/Contact';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
// rendering the current page (either HOme/About/Blog)to the app.js.
  const renderPage = () => {
    if (currentPage === 'About me') {
      return <About me />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props. This line of code renders the page user clicked and handles the page change in the navbar.*/}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line. It is calling the function to render the current page. */ }
      {renderPage()}
    </div>
  );
}
