import React from 'react'
import { useSelector } from 'react-redux'
import './ReviewSection.css'

const ReviewSection = () => {
    
    const selector = useSelector(state => state.reducer1)
    
    return (
        <>

            <section className="review" id="Review">

                <h1 className="heading"> {selector[5].sectionName[0]} <span>{selector[5].sectionName[1]}</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <img src={selector[5].reviewQuoteImage} alt="" className="quote" />
                        <p>{selector[5].reviewParagraphs}</p>
                        <img src={selector[5].reviewPersonImages[0]} className="user" alt="" />
                        <h3>{selector[5].reviewPersonName}</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>

                    <div className="box">
                        <img src={selector[5].reviewQuoteImage} alt="" className="quote" />
                        <p>{selector[5].reviewParagraphs}</p>
                        <img src={selector[5].reviewPersonImages[1]} className="user" alt="" />
                        <h3>{selector[5].reviewPersonName}</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                    
                    <div className="box">
                        <img src={selector[5].reviewQuoteImage} alt="" className="quote" />
                        <p>{selector[5].reviewParagraphs}</p>
                        <img src={selector[5].reviewPersonImages[2]} className="user" alt="" />
                        <h3>{selector[5].reviewPersonName}</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>

                </div>

            </section>
            
        </>
    )
}

export default ReviewSection
