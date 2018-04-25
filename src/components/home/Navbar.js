import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component{
    render(){
        return(
            <div className='nav'>
                <img src="https://render.fineartamerica.com/images/rendered/default/canvas-print/10.000/6.625/black/break/images/artworkimages/medium/1/balloons-in-the-morning-jeff-swan-canvas-print.jpg" alt=""/>
                <Link to="/">Home</Link>
                {"l"}
                <Link to="/perro">Perro</Link>
                {"l"}
                <Link to="/perro2">Perro2</Link>
                {"l"}

                <Link to="/login">
                <span>login</span>
                </Link>
            </div>
        )
    }
}
export default Navbar;