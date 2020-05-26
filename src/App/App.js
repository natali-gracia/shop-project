import React from 'react'

import './../common/style/reset.css'
import './../common/style/base.css'

import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import FixedNav from './Navbar/FixedNav/FixedNav'
import Main from './Main/Main'
import Footer from './Footer/Footer'


const App = () => {
  return (
    <div>
      <FixedNav/>
      <Header/>
      <Navbar/>
			<Main/>
      <Footer/>
    </div>
  );
}

export default App
