import React from 'react'
import Article from './article'

const Portfolio = () => {
  return (
    <section id="portfolio" className="page-section section appear clearfix secPad">
    <div className="container">
      <div className="heading text-center">
        {/* Heading */}
        <h2>Portfolio</h2>
        <p>
          At lorem Ipsum available, but the majority have suffered alteration
          in some form by injected humour.
        </p>
      </div>
      <div className="row">
        <nav id="filter" className="col-md-12 text-center">
          <ul>
            <li>
              <a href="#" className="current btn-theme btn-small" data-filter="*">All</a>
            </li>
            <li>
              <a href="#" className="btn-theme btn-small" data-filter=".webdesign">Web Design</a>
            </li>
            <li>
              <a href="#" className="btn-theme btn-small" data-filter=".photography">Photography</a>
            </li>
            <li>
              <a href="#" className="btn-theme btn-small" data-filter=".print">Print</a>
            </li>
          </ul>
        </nav>
        <div className="col-md-12">
          <div className="row">
            <div className="portfolio-items isotopeWrapper clearfix" id={3}>

                <Article name="webdesign"  pName="Project Name"/>
                <Article name="webdesign"  pName="Project Name" />
                <Article name="webdesign"  pName="Project Name" />
                <Article name="webdesign"  pName="Project Name" />
                <Article name="webdesign"  pName="Project Name" />
                <Article name="webdesign"  pName="Project Name" />
                <Article name="webdesign"  pName="Project Name" />
                <Article name="webdesign"  pName="Project Name" />
                <Article name="webdesign"  pName="Project Name" />
             

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Portfolio