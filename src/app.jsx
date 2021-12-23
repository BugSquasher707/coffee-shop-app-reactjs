import React, { useLayoutEffect, useState } from 'react'
import './app.css'
import AboutUs from './components/AboutUs/AboutUs'
import BlogSection from './components/BlogSection/BlogSection'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'
import HomeSection from './components/HomeSection/HomeSection'
import MenuSection from './components/MenuSection/MenuSection'
import NavBar from './components/NavBar/NavBar'
import ProductsSection from './components/ProductsSection/ProductsSection'
import ReviewSection from './components/ReviewSection/ReviewSection'
import { fetchData } from './components/action/action'
import { useDispatch } from 'react-redux'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { apiData } from './api/api'

const App = () => {

    const dispatch = useDispatch()

    const [data, setData] = useState(null)

    useLayoutEffect(()=>{
        try{
            setTimeout(()=>{
                dispatch(fetchData(apiData))
                setData(apiData)
            },5000)
        }   
        catch(e){
            console.log(e);
        }
    })

    return (
        <>

            { data && <>
                
                <NavBar/>

                <HomeSection/>

                <AboutUs/>

                <MenuSection/>

                <ProductsSection/>

                <ReviewSection/>

                <ContactSection/>

                <BlogSection/>

                <Footer/>

            </>}

            {!data && <div style={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
                
            <Loader
                type="Bars"
                color="#d3ad7f"
                height={80}
                width={80}
                timeout={5000}
            />

            </div> }

        </>
    )
}

export default App
