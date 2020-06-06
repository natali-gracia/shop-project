import React, { Component } from 'react'

import './zoomimage.css'

class ZoomImage extends Component {
    
    state = {
        backgroundImage: `url(${this.props.quickViewImg})`,
        backgroundPosition: '0% 0%',
    }

    handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = ((e.pageY - top) / height * 100) - 125
        this.setState({ backgroundPosition: `${x}% ${y}%`})
    }

    handleMouseOver = (quickViewImg) => {
        this.setState({
            backgroundImage: `url(${quickViewImg})`
        })
    }

    render () {
        const { quickViewImg }  = this.props;
        return (
            <figure  
                style={this.state}
                onMouseMove={this.handleMouseMove}
                onMouseOver={()=>this.handleMouseOver(quickViewImg)} 
                className='zoom-img-container'
            >
                <img src={quickViewImg}/>
            </figure>   
)}}

export default ZoomImage