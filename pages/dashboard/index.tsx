import type { NextPage } from 'next'

import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import Toolbar from '../../components/Toolbar/Toolbar'
import Workspace from '../../components/Workspace/Workspace'
import Footer from '../../components/Footer/Footer'

const Dashboard: NextPage = () => {
  return (
    <div className="main-layout">
      <div className="sidebar p-2 py-md-3">
        <div className="container-fluid">
          <Sidebar />
        </div>
      </div>
      <div className="wrapper">
        <div className="container-fluid">
          <Header />
          <Toolbar />
          <Workspace />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
