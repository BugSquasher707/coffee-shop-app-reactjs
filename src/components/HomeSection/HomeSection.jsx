import React from 'react'
import { useSelector } from 'react-redux'
import './HomeSection.css'

const HomeSection = () => {

    let selector = useSelector(state => state.reducer1)

    return (
        <>

            <section className="home" id="Home" style={{backgroundImage: `url(${selector[1].headerBgImage})`}}>

                <div className="content">
                    <h3>{selector[1].headerHeading}</h3>
                    <p>{selector[1].headerParagraph}</p>
                        {/* eslint-disable-next-line */}
                    <a href="#" className="btn">{selector[1].headerBtn}</a>
                </div>

            </section>

        </>
    )
}

export default HomeSection
