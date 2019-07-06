import React from 'react';
import {Link} from 'react-router-dom';
import FacebookAuth from './facebookAuth';

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
        <Link to='/' className='item'>ReacTodo</Link>
        
        
        <div className='right menu'>
            <FacebookAuth/>
        </div>
        
    </div>
    )
}
export default Header;