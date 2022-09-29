import React from 'react'
import '../css/Footer.css'
import FooterImage from '../assets/footerImage.png'

const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <div className='row rowColumn'>
                <a href="/">
                    <figure className='footerLogo'>
                        <img src={FooterImage} className='footerLogoImage' alt="" />
                    </figure>
                    <div className='footerCopyright'>
                        Copyright &copy; 2022 Happy Hound
                    </div>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer