import React from 'react';
import '../styles/pages/leaderboard.css';

function TitleMobile({ page, pageIcon}) {
  return (
  <div className="title-mobile-content">
    <img src={pageIcon} alt={page}/>
    <h1 >{ page }</h1>
  </div>
  )
}

export default TitleMobile;
