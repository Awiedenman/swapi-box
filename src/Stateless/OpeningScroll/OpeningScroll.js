import React from 'react';
import './OpeningScroll.css';


const OpeningScroll = ( props ) => {
  console.log(props)
   return (
    <div className ="fade">
      <section className="star-wars">
        <div className="crawl">
            {/* <h1> ...a long time ago in a galaxy far far away</h1> */}
            <h1 className = "title" > {props.randomScroll.title} </h1>
            <p>{ props.randomScroll.crawl }</p>
            <h2>{ props.randomScroll.releaseDate } </h2>
        </div>
      </section>
    </div>
   )
}

export default OpeningScroll;