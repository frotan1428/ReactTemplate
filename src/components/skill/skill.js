import React from 'react'
import Sectiontitle from '../section-title/secion-title'
import MySkill from './MySkill'


const Skill = () => {
  return (
    <section id="skills" className="secPad white">
    <div className="container">
      <div className="heading text-center">
        {/* Heading */}
        <Sectiontitle title="My Skills" desc=" Lorem ipsum dolor sit amet, consectetur adipiscing."/>
   
      </div>
      <div className="row">
        <div className="col-sm-6">
          <Sectiontitle title="Programming skill" desc=" It takes knowledge, smart work, and dedication to make great ideas
            come to life. I have been helping make great ideas happen for the
            past 7 years and am always ready for new challenges."/>

          <MySkill title="HTML5"  value="90" />
          <MySkill title="CSS/CC3"  value="90" />
          <MySkill title="JavaScript"  value="80" />
          <MySkill title="HTMjQuery/AjaxL5"  value="90" />

        </div>
        <div className="col-sm-6">

        <Sectiontitle title="Designing skill" desc=" It takes knowledge, smart work, and dedication to make great ideas
            come to life. I have been helping make great ideas happen for the
            past 7 years and am always ready for new challenges."/>

          <MySkill title="Photoshop"  value="90" />
          <MySkill title="CSS/CC3"  value="90" />
          <MySkill title="JavaScript"  value="80" />

        </div>
      </div>
    </div>
  </section>
  )
}

export default Skill