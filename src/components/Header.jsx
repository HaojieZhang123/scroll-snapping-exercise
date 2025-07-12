import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <a href={'#Home'}>Home</a>
                </li>
                <li>
                    <a href={'#About'}>About</a>
                </li>
                <li>
                    <a href={'#Contact'}>Contact</a>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Header