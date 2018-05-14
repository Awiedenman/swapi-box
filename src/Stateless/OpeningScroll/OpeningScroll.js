import React from 'react';
import './OpeningScroll.css';
import PropTypes from 'prop-types';

const OpeningScroll = ( {randomScroll} ) => {
   return (
    <div className ="fade">
      <section className="star-wars">
        <div className="crawl">
            <h1 className = "title" > { randomScroll.title} </h1>
            <p>{ randomScroll.crawl }</p>
            <h2>{ randomScroll.releaseDate } </h2>
        </div>
      </section>
    </div>
   )
}


OpeningScroll.propTypes ={
  randomScroll: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ])
}

export default OpeningScroll;