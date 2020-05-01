import React from 'react'

import './../common/style/reset.css'
import './../common/style/base.css'

import Header from './Header/Header'
import Navbar from './Navbar/Navbar'


const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
			<main>Hello world!</main>
			<footer>Hello world!</footer>
    </div>
  );
}

export default App
