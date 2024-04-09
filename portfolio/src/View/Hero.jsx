import React from 'react'
import { Link } from 'react-router-dom'
export default function Hero() {
  return (
    <div>
      <section id="hero" className="d-flex flex-column justify-content-center">
  <div className="container" data-aos="zoom-in" data-aos-delay={100}>
    <h1>Arman Khan</h1>
    <p>
      I'm a Developer.
      
    </p>
    <div className="social-links">
    <Link to="https://twitter.com/Arman_Khan9898" className="twitter">
        <i className="bx bxl-twitter" />
      </Link>
      <Link to="https://www.instagram.com/armankhan.24/" className="instagram">
        <i className="bx bxl-instagram" />
      </Link>
      <Link to="https://www.linkedin.com/in/arman-khan-6b60932aa/" className="linkedin">
        <i className="bx bxl-linkedin" />
      </Link>
    </div>
  </div>
</section>

    </div>
  )
}
