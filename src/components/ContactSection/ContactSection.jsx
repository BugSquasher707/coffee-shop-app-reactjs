import React from 'react'
import { useSelector } from 'react-redux'
import './ContactSection.css'

const ContactSection = () => {

    const selector = useSelector(state => state.reducer1)

    return (
        <>

            <section className="contact" id="Contact">

                <h1 className="heading"> <span>{selector[6].sectionName[0]}</span> {selector[6].sectionName[1]} </h1>

                <div className="row">

                        {/* eslint-disable-next-line */}
                    <iframe className="map" src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=gull%20berg%203+(softer%20house)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed' allowFullScreen="" loading="lazy"></iframe>

                    <form>
                        <h3>{selector[6].formTitle}</h3>
                        <div className="inputBox">
                            <span className="fas fa-user"></span>
                            <input type="text" placeholder="name" />
                        </div>
                        <div className="inputBox">
                            <span className="fas fa-envelope"></span>
                            <input type="email" placeholder="email" />
                        </div>
                        <div className="inputBox">
                            <span className="fas fa-phone"></span>
                            <input type="number" placeholder="number" />
                        </div>
                        {/* eslint-disable-next-line */}
                        <a href="#" className="btn">{selector[6].contactBtn}</a>
                    </form>

                </div>

            </section>
            
        </>
    )
}

export default ContactSection
