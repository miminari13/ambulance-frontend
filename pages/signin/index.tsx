import type { NextPage } from 'next'



const Signin: NextPage = () => {
  return (
    <div className="wrapper">
      <div className="page-body auth px-xl-4 px-sm-2 px-0 py-lg-2 py-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
              <div style={{maxWidth: '25rem'}}>
                <div className="mb-4">
                  <h1 style={{color: '#2794eb'}}><strong>MIR<span style={{color: '#00AC9A'}}>.Amb</span></strong></h1>
                </div>
                <div className="mb-5">
                  <h2 className="color-900">Ambulance management system</h2>
                </div>
                <ul className="list-unstyled mb-5">
                    <li className="mb-4">
                      <span className="d-block mb-1 fs-4 fw-light">Team tool</span>
                      <span className="color-600">
                        Handy features designed to make your teamwork<br></br>easy &amp; efficient
                      </span>
                    </li>
                    <li>
                      <span className="d-block mb-1 fs-4 fw-light">Easily manage your services</span>
                      <span className="color-600">Stay in-touch with your team and manage your calls, tasks, timelines and more</span>
                    </li>
                </ul>
                <div className="mb-2">
                    <a href="#" className="me-3 color-600">Home</a>
                    <a href="#" className="me-3 color-600">About Us</a>
                    <a href="#" className="me-3 color-600">FAQs</a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="card shadow-sm w-100 p-4 p-md-5" style={{maxWidth: '32rem'}}>
                <form className="row g-3">
                  <div className="col-12 text-center mb-5">
                    <h1>Sign in</h1>
                    <span className="text-muted">Get access to our dashboard</span>
                  </div>
                  <div className="col-12">
                    <div className="mb-2">
                      <label className="form-label">Email address</label>
                      <input type="email" className="form-control form-control-lg" placeholder="name@example.com" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-2">
                      <div className="form-label">
                        <span className="d-flex justify-content-between align-items-center">
                          Password
                          <a className="text-primary" href="#">Forgot Password?</a>
                        </span>
                      </div>
                      <input type="password" className="form-control form-control-lg" placeholder="***************" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col-12 text-center mt-4">
                    <a className="btn btn-lg btn-block btn-dark lift text-uppercase" href="#">SIGN IN</a>
                  </div>
                  <div className="col-12 text-center mt-4">
                    <span className="text-muted">Don't have an account yet? <a href="#">Sign up here</a></span>
                  </div>
                </form>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
