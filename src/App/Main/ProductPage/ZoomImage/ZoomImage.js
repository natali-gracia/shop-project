import React, { Component } from 'react'

import './zoomimage.css'

class ZoomImage extends Component {
    
    state = {
        backgroundImage: `url(${this.props.productViewImg})`,
        backgroundPosition: '0% 0%',
    }

    handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = ((e.pageY - top) / height * 100) - 125
        this.setState({ backgroundPosition: `${x}% ${y}%`})
    }

    handleMouseOver = (productViewImg) => {
        this.setState({
            backgroundImage: `url(${productViewImg})`
        })
    }
    
    render () {
        const { 
            productViewImg,
            imageView,
            setImageView,
        }  = this.props;
        return (
            <figure  
                style={this.state}
                onMouseMove={this.handleMouseMove}
                onMouseOver={()=>this.handleMouseOver(productViewImg)} 
                className='zoom-img-container'
                onClick={() => setImageView(!imageView)}
            >
                <img src={productViewImg} alt=''/>
            </figure>   
)}}

export default ZoomImage