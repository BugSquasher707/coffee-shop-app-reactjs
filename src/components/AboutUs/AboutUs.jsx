import React from 'react'
import { useSelector } from 'react-redux'
import './AboutUs.css'

const AboutUs = () => {
    
    const selector = useSelector(state => state.reducer1)

    return (
        <>

            <section className="about" id="About">

                <h1 className="heading"> <span>{selector[2].sectionName[0]}</span> {selector[2].sectionName[1]} </h1>

                <div className="row">

                    <div className="image">
                        <img src={selector[2].sectionImg} alt="" />
                    </div>

                    <div className="content">
                        <h3>{selector[2].sectionContentHeading}</h3>
                        <p>{selector[2].sectionContentParagraph[0]}</p>
                        <p>{selector[2].sectionContentParagraph[1]}</p>
                        {/* eslint-disable-next-line */}
                        <a href="#" className="btn aboutBtn">{selector[2].sectionBtn}</a>
                    </div>

                </div>

            </section>
            
        </>
    )
}

export default AboutUs
