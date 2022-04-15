import type { NextPage } from 'next'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Toolbar from '../../components/Toolbar'
import Workspace from '../../components/Workspace'
/*import ContactsAsyncServerSR from '../../components/ContactsAsyncServerSR'*/
import Footer from '../../components/Footer'


export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { contacts: data },
  }
};

const Dashboard: NextPage = ({ contacts }) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="wrapper">
        <Header />
        <Toolbar />
        {/*<ul>
          {contacts && contacts.map(({ id, name, email }) => (
            <li key={id}><strong>{name}</strong> ({email})</li>
          ))}
        </ul>*/}
        {/*<ContactsAsyncServerSR />*/}
        <Workspace />
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard
