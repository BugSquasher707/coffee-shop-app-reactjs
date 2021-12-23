import React from 'react'
import { useSelector } from 'react-redux'
import './BlogSection.css'

const BlogSection = () => {

    const selector = useSelector(state => state.reducer1)

    return (
        <>

            <section className="blogs" id="Blogs">

                <h1 className="heading"> {selector[7].sectionName[0]} <span>{selector[7].sectionName[1]}</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <div className="image">
                            <img src={selector[7].blogImages[0]} alt="" />
                        </div>
                        <div className="content">
                        {/* eslint-disable-next-line */}
                            <a href="#" className="title">{selector[7].blogTitle}</a>
                            <span>{selector[7].blogDate}</span>
                            <p>{selector[7].blogParagraph}</p>
                        {/* eslint-disable-next-line */}
                            <a href="#" className="btn">{selector[7].blogBtn}</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={selector[7].blogImages[1]} alt="" />
                        </div>
                        <div className="content">
                        {/* eslint-disable-next-line */}
                            <a href="#" className="title">{selector[7].blogTitle}</a>
                            <span>{selector[7].blogDate}</span>
                            <p>{selector[7].blogParagraph}</p>
                        {/* eslint-disable-next-line */}
                            <a href="#" className="btn">{selector[7].blogBtn}</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={selector[7].blogImages[2]} alt="" />
                        </div>
                        <div className="content">
                        {/* eslint-disable-next-line */}
                            <a href="#" className="title">{selector[7].blogTitle}</a>
                            <span>{selector[7].blogDate}</span>
                            <p>{selector[7].blogParagraph}</p>
                        {/* eslint-disable-next-line */}
                            <a href="#" className="btn">{selector[7].blogBtn}</a>
                        </div>
                    </div>

                </div>

            </section>
            
        </>
    )
}

export default BlogSection
