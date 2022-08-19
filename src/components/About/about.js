import React from 'react'
import Sectiontitle from '../section-title/secion-title'
import AboutItem from './aboutItem'

const About = () => {
  return (
    <section id="aboutUs" className="secPad">
    <div className="container">
        {/* Heading */}
        <Sectiontitle  title="I am Sam, a UI Designer &amp; developer" 
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
       
      <div className="row">
       

        <AboutItem  title="Responsive Design" desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse interdum erat et neque tincidunt volutpat. Cras eget
            augue id dui varius pretium." icon="desktop"/>


        <AboutItem  title="HTML5/CSS3 Dev " desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse interdum erat et neque tincidunt volutpat. Cras eget
            augue id dui varius pretium." icon="css3"/>

        <AboutItem  title="JavaScript/ id-color " desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse interdum erat et neque tincidunt volutpat. Cras eget
            augue id dui varius pretium." icon="lightbulb-o"/>
       
      </div>
    </div>
  </section>


  )
}

export default About