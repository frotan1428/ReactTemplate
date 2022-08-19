import React from 'react'

const Article = (props) => {
  return (
    <article className={`col-sm-4 isotopeItem ${props.name}`}>
    <div className="portfolio-item">
      <img src="assets/images/portfolio/img1.jpg" alt="" />
      <div className="portfolio-desc align-center">
        <div className="folio-info">
          <a href="images/portfolio/img1.jpg" className="fancybox">
            <h5>{props.pName}</h5>
            <i className="fa fa-arrows-alt fa-2x" /></a>
        </div>
      </div>
    </div>
  </article>

  
  )
}

export default Article