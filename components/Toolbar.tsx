import type { NextPage } from 'next'



const Toolbar: NextPage = () => {
  return (
    <div className="page-toolbar px-xl-4 px-sm-2 px-0 py-3">
      <div className="container-fluid">
        <div className="row mb-3 align-items-center">
            <div className="col">
                <ol className="breadcrumb bg-transparent mb-0">
                    <li className="breadcrumb-item"><a className="text-secondary" href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Layouts</li>
                </ol>
            </div>
        </div>
        <div className="row align-items-center">
            <div className="col-auto">
              <h1 className="fs-5 color-900 mt-1 mb-0">Welcome back, Chris!</h1>
              <small className="text-muted">You have 12 new messages and 7 new notifications.</small>
            </div>
            <div className="col d-flex align-items-center justify-content-lg-end mt-2 mt-md-0">
              <div>
                <div className="text-center">
                  <small className="text-uppercase">Сall processing:</small>
                </div>
                <div className="row">
                  <div className="col d-flex align-items-center p-2 text-center">
                    <div className="p-2 me-md-3">
                      <div><span className="h6 mb-0">8</span> <small className="text-secondary"><i className="fa fa-angle-up"></i> 15%</small></div>
                      <small className="text-muted text-uppercase">Income</small>
                    </div>
                    <div className="p-2 me-md-3">
                      <div><span className="h6 mb-0">2</span> <small className="text-secondary"><i className="fa fa-angle-up"></i> 40%</small></div>
                      <small className="text-muted text-uppercase">Closed</small>
                    </div>
                    <div className="p-2 pe-lg-0">
                      <div><span className="h6 mb-0">3</span> <small className="text-danger"><i className="fa fa-angle-down"></i> 75%</small></div>
                      <small className="text-muted text-uppercase">Missed</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
  </div>
  )
}

export default Toolbar