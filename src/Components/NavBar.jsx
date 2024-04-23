import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand fw-bold" id='nav'>Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/HOME' className="nav-link active" aria-current="page" href="#">
                <FaHome /> HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/full-stack-developer' className="nav-link active" href="#">FULL STACK DEVELOPMENT</Link>
            </li>
            <li className="nav-item">
              <Link to='/data-science' className="nav-link active" href="#">DATA SCIENCE</Link>
            </li>
            <li className="nav-item">
              <Link to='/cyber-security' className="nav-link active" href="#">CYBER SECURITY</Link>
            </li>
            <li className="nav-item">
              <Link to='/career' className="nav-link active" aria-disabled="true">CAREER</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
