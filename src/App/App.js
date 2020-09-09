import React from 'react'

import './../common/style/reset.css'
import './../common/style/base.css'

import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import FixedNav from './Navbar/FixedNav/FixedNav'
import Main from './Main/Main'
import ProductQuickview from './Main/Products/ProductQuickview'
import Footer from './Footer/Footer'
import NewsPopUp from './Popup/Popup-newsletter/NewspopUp'
import Loader from './../Components/loading/Loader'


const App = () => {
  return (
    <div>
      <FixedNav/>
      <Header/>
      <Navbar/>
			<Main/>
      <ProductQuickview/>
      <Footer/>
      <NewsPopUp/>
    </div>
  );
}

export default App
