import React from 'react'
import '../css/Footer.css'
import FooterImage from '../assets/footerImage.png'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <div className='row rowColumn'>
                <Link to="/">
                    <div className='logoFooter'>
                        <figure className='footerLogo'>
                            <img src={FooterImage} className='footerLogoImage' alt="" />
                        </figure>
                    </div>
                    <div className='footerCopyright'>
                        Copyright &copy; 2022 Happy Hound
                    </div>
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer