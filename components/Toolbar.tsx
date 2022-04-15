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
            <div className="col d-flex justify-content-lg-end mt-2 mt-md-0">
                <div className="p-2 me-md-3">
                    <div><span className="h6 mb-0">8.18K</span> <small className="text-secondary"><i className="fa fa-angle-up"></i> 1.3%</small></div>
                    <small className="text-muted text-uppercase">Income</small>
                </div>
                <div className="p-2 me-md-3">
                    <div><span className="h6 mb-0">1.11K</span> <small className="text-secondary"><i className="fa fa-angle-up"></i> 4.1%</small></div>
                    <small className="text-muted text-uppercase">Expense</small>
                </div>
                <div className="p-2 pe-lg-0">
                    <div><span className="h6 mb-0">3.66K</span> <small className="text-danger"><i className="fa fa-angle-down"></i> 7.5%</small></div>
                    <small className="text-muted text-uppercase">Revenue</small>
                </div>
            </div>
        </div>
      </div>
  </div>
  )
}

export default Toolbar