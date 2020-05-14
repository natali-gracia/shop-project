import React, {useState, useEffect} from "react"

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
                        <a href="/">
                            <img src={logoShort} alt=""/>
                        </a>
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
          </div>
    )
}

export default FixedNav