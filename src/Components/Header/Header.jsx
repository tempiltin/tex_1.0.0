import React from 'react'
import logo from '../../assets/images/logo.15c67663.png'
import logo1 from '../../assets/images/gerb.png'
const Header = () => {
  return (
    
<section className="home">
   <div className="length">
      <div className="mycontainer">
         <div className="row justify-content-between align-items-center">
            <div className="col-auto">
               <div className="img_logo1">
               <img src={logo1} alt="" />
               </div>
            </div>
              <div className="col-auto">
                <h1 className="heading">
                  Narpay xizmat ko'rsatish texnikumi
                </h1>
              </div>
            <div className="col-auto">
               <div className="img_logo">
               <img src={logo} alt="" />
               </div>
            </div>
         </div>
      </div>
   </div>
<div className="swiper home-slider">
   
   <div className="swiper-wrapper">


      <section className="swiper-slide slide swiper-slide2" >
         <div className="content">
            <h3>Narpay xizmat ko'rsatish texnikumi!</h3>
            <p>Texnikumlarga hujjatlarni onlayn topshirish tizimi</p>
            <a href="https://texnikum.edu.uz/auth/?token=g9ui35bL904bvt0d1rS0l9jbcNv59bdvmq317Kxr1y1r540yhyTv11Bf03702m26v6G01n43cE60i320spc2ni013aHdAeGjuh7h79j5hfik1qHEEi70Bnd3na103x2d" className="btn"> Ariza topshirish</a>
         </div>
      </section>


   </div>

   <div className="swiper-pagination"></div>

</div>

</section>
  )
}

export default Header