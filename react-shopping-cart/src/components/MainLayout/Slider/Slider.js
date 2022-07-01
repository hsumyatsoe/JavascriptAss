import React from 'react';
// This is under development.

function Slider (props){    
    return(
        <div>
        	<div id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel">
        	  <div className="carousel-inner relative w-full overflow-hidden">
        	    
        	    <div className="carousel-item relative float-left w-full">
        	      <img
        	        src="https://mdbcdn.b-cdn.net/img/new/slides/016.webp"
        	        className="block w-full"
        	        alt="Slider Area"
        	      />
        	    </div>
        	  </div>
        	</div>
        </div>
    )
}

export default Slider;