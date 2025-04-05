import { useRouter } from 'next/router';
import React from 'react'

const index = () => {
        const router = useRouter();
        const { blogId } = router.query;
    
  return (
    <div className="blogsWrapper">
	<div className="blogHeader">
		Our Blogs
	</div>
	
	<div className="blogsWrapperActual">
		
	<div className="blogDetailsCard">
  <div className="blogDetailsCardHeader">
    SATURDAY | APR 5, 2025 | 5:30 PM EST
  </div>

  <div className="blogDetailsCardMain">
    <h1>Richard Torrez Jr. vs Guido Vianello</h1>
    <p>at <span className="highlight">Pearl Concert Theater</span></p>
    <p>in <span className="highlight">Las Vegas, Nevada</span></p>
    <p>brought to you by</p>
    <p className="network">ESPN</p>
  </div>

  <div className="blogDetailsCardBoutLabel">
    BOUT CARD
  </div>

  <div className="blogDetailsCardFights">
    <p>RICHARD TORREZ JR. VS GUIDO VIANELLO</p>
    <p>LINDOLFO DELGADO VS ELVIS RODRIGUEZ</p>
    <p>ABDULLAH MASON VS CARLOS ORNELAS</p>
  </div>
</div>
  
  </div>

	</div>
  )
}

export default index
