import type { NextPage } from 'next'

import Image from 'next/image'
import Avatar from '../../assets/img/avatar.jpg'

const User: NextPage = () => {
  return (
    <div className="dropdown morphing scale-left user-profile mx-lg-3 mx-2">
        <a className="nav-link dropdown-toggle rounded-circle after-none p-0" href="#" role="button" data-bs-toggle="dropdown">
          <Image className="avatar img-thumbnail rounded-circle shadow" src={Avatar} alt="" width="60" height="60"/>
        </a>
        <div className="dropdown-menu border-0 rounded-4 shadow p-0">
            <div className="card border-0 w240">
                <div className="card-body border-bottom d-flex">
                    <Image className="avatar rounded-circle" src={Avatar} alt="" width="60" height="60"/>
                    <div className="flex-fill ms-3">
                        <h6 className="card-title mb-0">Maria Art</h6>
                        <span className="text-muted">mariaart@miramb.com</span>
                    </div>
                </div>
                <div className="list-group m-2 mb-3">
                    <a className="list-group-item list-group-item-action border-0" href="../page-profile.html"><i className="w30 fa fa-user"></i>Profile &amp; account</a>
                    <a className="list-group-item list-group-item-action border-0" href="../account-settings.html"><i className="w30 fa fa-gear"></i>Settings</a>
                    <a className="list-group-item list-group-item-action border-0" href="../page-support-ticket.html"><i className="w30 fa fa-tag"></i>Support Ticket</a>
                    <a className="list-group-item list-group-item-action border-0" href="../page-teamsboard.html"><i className="w30 fa fa-users"></i>Manage team</a>
                    <a className="list-group-item list-group-item-action border-0" href="../dashboard-enevt.html"><i className="w30 fa fa-calendar"></i>My Events</a>
                </div>
                <a href="#" className="btn bg-secondary text-light text-uppercase rounded-0">Sign out</a>
            </div>
        </div>
    </div>
  )
}

export default User