import React from 'react'
import './nav.scss'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <Link to='/' className='title'>PageTitle</Link>

        <div className='links'>
            <Link to="/">About us</Link>
            <Link to="/">Home</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Products</Link>

        </div>
    </div>
  )
}

import React from 'react'
import './Nav.scss'
import {Link} from 'react-router-dom'
import { AiFillApple } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import ProductsMegamenu from './ProductsMegamenu'
import { BsTriangleFill } from 'react-icons/bs'

const Nav1 = () => {
  return (
    <div className='nav'>
            <Link to='/' className='title'>
            <AiFillApple/>Title
            </Link>
        <div className='links'>
            <div className='nav-link'>
                <Link to='/' className='inner-link'>Products <MdKeyboardArrowDown/></Link>
                <BsTriangleFill className='arrow'/>
                <ProductsMegamenu/>
            </div>
            <div className='nav-link'>
                <Link to='/' className='inner-link'>Blog</Link>
            </div>
            <div className='nav-link'>
                <Link to='/'className='inner-link'>About</Link>
            </div>
        </div>
        <div className='auth'>
            <Link to='/'>Log In</Link>
            <Link to='/' className='signup'>Sign Up</Link>
        </div>
    </div>
  )
}


export default Nav