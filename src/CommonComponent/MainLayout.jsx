import React,{useEffect, Suspense} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Loader from './Loader'
const MainLayout = () => {
    const location = useLocation();
    useEffect(() => {
        if (process.env.NODE_ENV !== 'test' && typeof window.scrollTo === 'function') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        }
    }, [location]);
    return (
        <>
            <Navbar />
            <div className="pt-16">
                <Suspense fallback={<Loader />}> 
                  <Outlet />
                </Suspense>
            </div>
            <Footer />
        </>
    )
}

export default MainLayout