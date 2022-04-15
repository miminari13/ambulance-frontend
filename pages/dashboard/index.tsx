import type { NextPage } from 'next'

import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import Toolbar from '../../components/Toolbar/Toolbar'
import Workspace from '../../components/Workspace/Workspace'
import Footer from '../../components/Footer/Footer'



const Dashboard: NextPage = () => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="wrapper">
        <Header />
        <Toolbar />
        <Workspace />
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard
