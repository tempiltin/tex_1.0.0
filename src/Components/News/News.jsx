import React from 'react'

const News = () => {
    return (
        <section className="courses">

            <h1 className="heading"> our famous courses </h1>

            <div className="box-container">

                <div className="box">
                    <div className="image">
                        <img src="images/course-2-1.jpg" alt="" />
                        <h3>development</h3>
                    </div>
                    <div className="content">
                        <h3>choose what's best for you!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                        <a href="#!" className="btn">read more</a>
                        <div className="icons">
                            <span> <i className="fas fa-book"></i> 12 modules </span>
                            <span> <i className="fas fa-clock"></i> 6 hours </span>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src="images/course-2-2.jpg" alt="" />
                        <h3>engineering</h3>
                    </div>
                    <div className="content">
                        <h3>choose what's best for you!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                        <a href="#!" className="btn">read more</a>
                        <div className="icons">
                            <span> <i className="fas fa-book"></i> 12 modules </span>
                            <span> <i className="fas fa-clock"></i> 6 hours </span>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src="images/course-2-3.jpg" alt="" />
                        <h3>mathemetics</h3>
                    </div>
                    <div className="content">
                        <h3>choose what's best for you!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                        <a href="#!" className="btn">read more</a>
                        <div className="icons">
                            <span> <i className="fas fa-book"></i> 12 modules </span>
                            <span> <i className="fas fa-clock"></i> 6 hours </span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="load-more"> <div className="btn">load more</div> </div>

        </section>
    )
}

export default News