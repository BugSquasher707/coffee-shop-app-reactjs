import React from 'react'
import { useSelector } from 'react-redux'
import './MenuSection.css'

const MenuSection = () => {

    const selector = useSelector(state => state.reducer1)

    return (
        <>

            <section className="menu" id="Menu">

                <h1 className="heading"> {selector[3].sectionName[0]} <span>{selector[3].sectionName[1]}</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <img src={selector[3].menuImages[0]} alt="" />
                        <h3>{selector[3].menuHeading}</h3>
                        <div className="price">${selector[3].menuPrice} <span>{selector[3].menuDiscountPrice}</span></div>
                        {/* eslint-disable-next-line */}
                        <a href="#" className="btn">{selector[3].menuBtn}</a>
                    </div>

                    <div className="box">
                        <img src={selector[3].menuImages[1]} alt="" />
                        <h3>{selector[3].menuHeading}</h3>
                        <div className="price">${selector[3].menuPrice} <span>{selector[3].menuDiscountPrice}</span></div>
                        {/* eslint-disable-next-line */}
                        <a href="#" className="btn">{selector[3].menuBtn}</a>
                    </div>

                    <div className="box">
                        <img src={selector[3].menuImages[2]} alt="" />
                        <h3>{selector[3].menuHeading}</h3>
                        <div className="price">${selector[3].menuPrice} <span>{selector[3].menuDiscountPrice}</span></div>
                        {/* eslint-disable-next-line */}
                        <a href="#" className="btn">{selector[3].menuBtn}</a>
                    </div>

                    <div className="box">
                        <img src={selector[3].menuImages[3]} alt="" />
                        <h3>{selector[3].menuHeading}</h3>
                        <div className="price">${selector[3].menuPrice} <span>{selector[3].menuDiscountPrice}</span></div>
                        {/* eslint-disable-next-line */}
                        <a href="#" className="btn">{selector[3].menuBtn}</a>
                    </div>

                    <div className="box">
                        <img src={selector[3].menuImages[4]} alt="" />
                        <h3>{selector[3].menuHeading}</h3>
                        <div className="price">${selector[3].menuPrice} <span>{selector[3].menuDiscountPrice}</span></div>
                        {/* eslint-disable-next-line */}
                        <a href="#" className="btn">{selector[3].menuBtn}</a>
                    </div>

                    <div className="box">
                        <img src={selector[3].menuImages[5]} alt="" />
                        <h3>{selector[3].menuHeading}</h3>
                        <div className="price">${selector[3].menuPrice} <span>{selector[3].menuDiscountPrice}</span></div>
                        {/* eslint-disable-next-line */}
                        <a href="#" className="btn">{selector[3].menuBtn}</a>
                    </div>

                </div>

            </section>
            
        </>
    )
}

export default MenuSection
