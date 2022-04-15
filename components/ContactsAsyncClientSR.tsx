import type { NextPage } from 'next'
import { useState, useEffect } from 'react'



const ContactsAsyncClientSR: NextPage = () => {
  const [contactsList, setContactsList] = useState(null);

  useEffect( () => {
    const fecthData = async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await resp.json();

      setContactsList(data)
    }

    fecthData();
  }, [] )

  return (
    <div className="px-xl-4 px-sm-2 px-0 py-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <ul>
              {contactsList && contactsList.map( ( {id, name, email} ) => (
                <li key={id}>{name} - {email}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsAsyncClientSR