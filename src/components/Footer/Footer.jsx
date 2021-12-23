import React from 'react'
import { useSelector } from 'react-redux'
import './Footer.css'

const Footer = () => {

    const selector = useSelector(state => state.reducer1)

    return (
        <>

            <section className="footer">

                <div className="share">
                {/* eslint-disable-next-line */}
                    <a href="#" className="fab fa-facebook-f"></a>
                        {/* eslint-disable-next-line */}
                    <a href="#" className="fab fa-twitter"></a>
                        {/* eslint-disable-next-line */}
                    <a href="#" className="fab fa-instagram"></a>
                        {/* eslint-disable-next-line */}
                    <a href="#" className="fab fa-linkedin"></a>
                        {/* eslint-disable-next-line */}
                    <a href="#" className="fab fa-pinterest"></a>
                </div>

                <div className="links">

                    {
                        selector[8].footerLi.map((item, i) => {
                            return(
                                <>

                                    <a href={`#${item}`} key={i}>{item}</a>
    
                                </>
                            )
                        })
                    }

                </div>

                <div className="credit">{selector[8].footerDescription[0]} <span>{selector[8].footerDescription[1]}</span> {selector[8].footerDescription[2]}</div>

            </section>
            
        </>
    )
}

export default Footer
