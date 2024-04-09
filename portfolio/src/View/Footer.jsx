import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
      <>

  <footer id="footer">
    <div className="container">
      <h3>Arman Khan</h3>
      <p>
      Fueled by an insatiable curiosity, the Bachelor of Computer Science student devoured every textbook, eager to unlock the secrets of the digital world.
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
  </footer>
  {/* End Footer */}
</>

    </div>
  )
}
