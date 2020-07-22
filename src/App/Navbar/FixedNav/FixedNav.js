import React, {useState, useEffect} from "react"

import { Link } from 'react-router-dom'

import './fixednav.css'

import logoShort from './logo-short.png'
import MenuTop from '../MenuTop'
import CartHeader from '../../Header/CartHeader/CartHeader'


const FixedNav = () => {

    const [showNavBar, setShowNavBar] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.pageYOffset > 260) {
                setShowNavBar(true);
              } else {
                setShowNavBar(false);
              }
        }
        window.addEventListener("scroll", handleScroll)
        const cleanup = () => {
          window.removeEventListener("scroll", handleScroll);
        }
        return cleanup 
    })

    return (      
          <div className={showNavBar === false ? 'fixednav' : 'fixednav is-nav-open'}>
              <div className='container wrap fixednav-row'>
                    <div className="col-md-3 fixednav-logo">
                        <Link to="/">
                            <img src={logoShort} alt=""/>
                        </Link>
                    </div>
                    <div className="fixed-menu">
                        <MenuTop
                            labelHotMargin={{top: 0}}
                        />
                    </div>
                    <div className="fixed-cart">
                        <CartHeader
                            topCartComponent = {false}
                            headerCartMargin = {{marginTop: 24}}
                        />
                    </div>
              </div>
              <div className="back-to-top">
                    <button className="btn-square" onClick={()=>window.scrollTo(0, 0)} title='Scroll to top'></button>
              </div>
          </div>
    )
}

export default FixedNav