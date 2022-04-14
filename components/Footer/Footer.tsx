import type { NextPage } from 'next'
import s from "./Footer.module.scss";

const Footer: NextPage = () => {
  return (
    <footer className="page-footer px-xl-4 px-sm-2 px-0 py-3">
      <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center">
        <p className="col-md-4 mb-0 text-muted">© 2022 <a href="https://github.com/miminari13" target="_blank" title="@miminari13">@miminari13</a>, All Rights Reserved.</p>
        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center my-3 my-lg-0 me-lg-auto">
            <h1 style={{color: '#2794eb'}}>
              <strong>MIR<span style={{color: '#00AC9A'}}>.Amb</span></strong>
            </h1>
        </a>
        <ul className="nav col-md-4 justify-content-center justify-content-lg-end">
          <li className="nav-item">
          <a href="/help" target="_blank" className="nav-link px-2 text-muted">Help</a></li>
          <li className="nav-item"><a href="/faq" target="_blank" className="nav-link px-2 text-muted">FAQ</a></li>
          <li className="nav-item"><a href="/support" target="_blank" className="nav-link px-2 text-muted">Support</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
