import React from 'react'
const icon1 = "/assets/images/subject-icon-1.png"
const icon2 = "../../assets/images/subject-icon-2.png"
const icon3 = "../../assets/images/subject-icon-3.png"
const icon4 = "../../assets/images/subject-icon-4.png"
const icon5 = "../../assets/images/subject-icon-5.png"
const icon6 = "../../assets/images/subject-icon-6.png"

const Subject = () => {
  return (
    <section className="subjects">

   <h1 className="heading">bizning mashhur mavzularimiz</h1>

   <div className="box-container">

      <div className="box">
         <img src={icon1} alt=""/>
         <h3>graphic design</h3>
         <p>12 modul</p>
      </div>

      <div className="box">
         <img src={icon2} alt=""/>
         <h3>matematika</h3>
         <p>12 modul</p>
      </div>

      <div className="box">
         <img src={icon3} alt=""/>
         <h3>teaching</h3>
         <p>12 modules</p>
      </div>

      <div className="box">
         <img src={icon4} alt=""/>
         <h3>development</h3>
         <p>12 modules</p>
      </div>

      <div className="box">
         <img src={icon5} alt=""/>
         <h3>science</h3>
         <p>12 modules</p>
      </div>

      <div className="box">
         <img src={icon6} alt=""/>
         <h3>engineering</h3>
         <p>12 modules</p>
      </div>

   </div>

</section>

  )
}

export default Subject