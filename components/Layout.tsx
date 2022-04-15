import type { NextPage } from 'next'
import Sidebar from './Sidebar'



const Layout: NextPage = ({children}) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}

export default Layout