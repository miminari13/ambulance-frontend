import type { NextPage } from 'next'
import Search from './header/Search'
import Notifications from './header/Notifications'
import Lang from './header/Lang'
import User from './header/User'
import Image from 'next/image'
import Avatar from '../../assets/img/avatar.jpg'



const Header: NextPage = () => {
  return (
    <div className="page-header sticky-top px-xl-4 px-sm-2 px-0 py-lg-2 py-1">
      <div className="container-fluid">
        <nav className="navbar">
          <div className="d-flex">
              <a href="index.html" className="brand-icon pe-3 d-flex align-items-center text-primary">
                <h4 className="m-0" style={{color: '#2794eb'}}>
                  <strong>MIR<span style={{color: '#00AC9A'}}>.Amb</span></strong>
                </h4>
              </a>
          </div>    
          <div className="header-left flex-grow-1 d-none d-md-block">
            <Search />
          </div>    
          <ul className="header-right justify-content-end d-flex align-items-center mb-0">
            <li>
              <Notifications />
            </li>
            <li>
              <Lang />
            </li>
            <li>
              <User />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header