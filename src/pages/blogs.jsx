import React from 'react'

const index = () => {
  return (
    <div className="blogsWrapper">
	<div className="blogHeader">
		Our Blogs
	</div>
	
	<div className="blogsWrapperActual">
		
		<div className="blogCard">
  <div className="blogCardHeader">
    <span>SATURDAY | APR 5, 2025 | 1:30 PM EST</span>
  </div>
  <div className="blogCardBody">
    <div className="blogCardInfo">
      <h2>Joe Joyce vs Filip Hrgovic</h2>
      <div className="blogCardDetails">
        <div className="blogCardDetail">
          <span className="icon">📺</span>
          <span>DAZN</span>
        </div>
        <div className="blogCardDetail">
          <span className="icon">📍</span>
          <span>Manchester, United Kingdom</span>
        </div>
      </div>
    </div>
    <div className="blogCardArrow">›</div>
  </div>
</div>
  
  </div>

	</div>
  )
}

export default index
