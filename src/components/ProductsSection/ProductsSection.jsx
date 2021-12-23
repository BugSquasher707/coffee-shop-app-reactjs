import React from 'react'
import { useSelector } from 'react-redux'
import './ProductsSection.css'

const ProductsSection = () => {
    
    const selector = useSelector(state => state.reducer1)
    
    return (
        <>

            <section className="products" id="Products">

                <h1 className="heading"> {selector[4].sectionName[0]} <span>{selector[4].sectionName[1]}</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <div className="icons">
                        {/* eslint-disable-next-line */}
                            <a href="#" className="fas fa-shopping-cart"></a>
                        {/* eslint-disable-next-line */}
                            <a href="#" className="fas fa-heart"></a>
                        {/* eslint-disable-next-line */}
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <div className="image">
                            <img src={selector[4].productImages[0]} alt="" />
                        </div>
                        <div className="content">
                            <h3>{selector[4].productTitle}</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="price">${selector[4].productPrice} <span>{selector[4].productDiscountPrice}</span></div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icons">
                            {/* eslint-disable-next-line */}
                            <a href="#" className="fas fa-shopping-cart"></a>
                        {/* eslint-disable-next-line */}
                            <a href="#" className="fas fa-heart"></a>
                        {/* eslint-disable-next-line */}
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <div className="image">
                            <img src={selector[4].productImages[1]} alt="" />
                        </div>
                        <div className="content">
                            <h3>{selector[4].productTitle}</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="price">${selector[4].productPrice} <span>{selector[4].productDiscountPrice}</span></div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icons">
                        {/* eslint-disable-next-line */}
                            <a href="#" className="fas fa-shopping-cart"></a>
                        {/* eslint-disable-next-line */}
                            <a href="#" className="fas fa-heart"></a>
                        {/* eslint-disable-next-line */}
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <div className="image">
                            <img src={selector[4].productImages[2]} alt="" />
                        </div>
                        <div className="content">
                            <h3>{selector[4].productTitle}</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="price">${selector[4].productPrice} <span>{selector[4].productDiscountPrice}</span></div>
                        </div>
                    </div>

                </div>

            </section>
            
        </>
    )
}

export default ProductsSection
