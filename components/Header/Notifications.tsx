import type { NextPage } from 'next'

import Image from 'next/image'
import Avatar from '../../assets/img/avatar.jpg'


const Notifications: NextPage = () => {
  return (
    <div className="dropdown morphing scale-left notifications">
      <a className="nav-link dropdown-toggle after-none" href="#" role="button" data-bs-toggle="dropdown">
        <span className="d-none d-xl-block me-2">Notifications</span>
        <svg className="d-inline-block d-xl-none" viewBox="0 0 16 16" width="18px" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 1.91802L7.203 2.07902C6.29896 2.26322 5.48633 2.75412 4.90265 3.46864C4.31897 4.18316 4.0001 5.07741 4 6.00002C4 6.62802 3.866 8.19702 3.541 9.74202C3.381 10.509 3.165 11.308 2.878 12H13.122C12.835 11.308 12.62 10.51 12.459 9.74202C12.134 8.19702 12 6.62802 12 6.00002C11.9997 5.07758 11.6807 4.18357 11.097 3.46926C10.5134 2.75494 9.70087 2.26419 8.797 2.08002L8 1.91802ZM14.22 12C14.443 12.447 14.701 12.801 15 13H1C1.299 12.801 1.557 12.447 1.78 12C2.68 10.2 3 6.88002 3 6.00002C3 3.58002 4.72 1.56002 7.005 1.09902C6.99104 0.959974 7.00638 0.819547 7.05003 0.686794C7.09368 0.554041 7.16467 0.43191 7.25842 0.328279C7.35217 0.224647 7.4666 0.141815 7.59433 0.085125C7.72206 0.028435 7.86026 -0.000854492 8 -0.000854492C8.13974 -0.000854492 8.27794 0.028435 8.40567 0.085125C8.5334 0.141815 8.64783 0.224647 8.74158 0.328279C8.83533 0.43191 8.90632 0.554041 8.94997 0.686794C8.99362 0.819547 9.00896 0.959974 8.995 1.09902C10.1253 1.32892 11.1414 1.94238 11.8712 2.83552C12.6011 3.72866 12.9999 4.84659 13 6.00002C13 6.88002 13.32 10.2 14.22 12Z"></path>
          <path className="fill-secondary" d="M9.41421 15.4142C9.03914 15.7893 8.53043 16 8 16C7.46957 16 6.96086 15.7893 6.58579 15.4142C6.21071 15.0391 6 14.5304 6 14H10C10 14.5304 9.78929 15.0391 9.41421 15.4142Z"></path>
        </svg>
      </a>
        <div id="NotificationsDiv" className="dropdown-menu shadow rounded-4 border-0 p-0 m-0">
            <div className="card w380">
              <div className="card-header p-3">
                <h6 className="card-title mb-0">Notifications Center</h6>
                <span className="badge bg-danger text-light">20</span>
              </div>
              <ul className="nav nav-tabs tab-card d-flex text-center" role="tablist">
                <li className="nav-item flex-fill"><a className="nav-link active" data-bs-toggle="tab" href="#Noti-tab-Message" role="tab">Message</a></li>
                <li className="nav-item flex-fill"><a className="nav-link" data-bs-toggle="tab" href="#Noti-tab-Events" role="tab">Events</a></li>
                <li className="nav-item flex-fill"><a className="nav-link" data-bs-toggle="tab" href="#Noti-tab-Logs" role="tab">Logs</a></li>
              </ul>
                <div className="tab-content card-body custom_scroll">
                  <div className="tab-pane fade show active" id="Noti-tab-Message" role="tabpanel">
                    <ul className="list-unstyled list mb-0">
                      <li className="py-2 mb-1 border-bottom">
                        <a href="#" className="d-flex">
                          <Image className="avatar rounded-circle" src={Avatar} alt="" width="40" height="40"/>
                          <div className="flex-fill ms-3">
                            <p className="d-flex justify-content-between mb-0"><span>Jeam Gee</span> <small>13min</small></p>
                            <span>making it over 200 years old</span>
                          </div>
                        </a>
                      </li>
                      <li className="py-2 mb-1 border-bottom">
                        <a href="#" className="d-flex">
                          <Image className="avatar rounded-circle" src={Avatar} alt="" width="40" height="40"/>
                          <div className="flex-fill ms-3">
                          <p className="d-flex justify-content-between mb-0"><span>Phil Deleum</span> <small>1hr</small></p>
                          <span>There are many variations of titles</span>
                          </div>
                        </a>
                      </li>
                      <li className="py-2 mb-1 border-bottom">
                          <a href="#" className="d-flex">
                              <Image className="avatar rounded-circle" src={Avatar} alt="" width="40" height="40"/>
                              <div className="flex-fill ms-3">
                                  <p className="d-flex justify-content-between mb-0"><span>Nick Rosie</span> <small>2min</small></p>
                                  <span>changed an issue from "In Progress" to <span className="badge bg-success">Closed</span></span>
                              </div>
                          </a>
                      </li>
                      <li className="py-2 mb-1 border-bottom">
                          <a href="#" className="d-flex">
                              <Image className="avatar rounded-circle" src={Avatar} alt="" width="40" height="40"/>
                              <div className="flex-fill ms-3">
                                  <p className="d-flex justify-content-between mb-0"><span>John Weekick</span> <small>13min</small></p>
                                  <span>It is a long established fact that a reader will be happy</span>
                              </div>
                          </a>
                      </li>
                      <li className="py-2 mb-1 border-bottom">
                          <a href="#" className="d-flex">
                              <Image className="avatar rounded-circle" src={Avatar} alt="" width="40" height="40"/>
                              <div className="flex-fill ms-3">
                                  <p className="d-flex justify-content-between mb-0"><span>Eliot Spide</span> <small>1hr</small></p>
                                  <span>There are many variations of texts</span>
                              </div>
                          </a>
                      </li>
                      <li className="py-2 mb-1 border-bottom">
                          <a href="#" className="d-flex">
                              <Image className="avatar rounded-circle" src={Avatar} alt="" width="40" height="40"/>
                              <div className="flex-fill ms-3">
                                  <p className="d-flex justify-content-between mb-0"><span>Phil Deleum</span> <small>1day</small></p>
                                  <span>Title to popular belief <span className="badge bg-danger">Event</span></span>
                              </div>
                          </a>
                      </li>
                      <li className="py-2">
                          <a href="#" className="d-flex">
                              <Image className="avatar rounded-circle" src={Avatar} alt="" width="40" height="40"/>
                              <div className="flex-fill ms-3">
                                  <p className="d-flex justify-content-between mb-0"><span>Anna Levit</span> <small>1day</small></p>
                                  <span>The generated Lorem Ipsum</span>
                              </div>
                          </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="Noti-tab-Events" role="tabpanel">
                      <ul className="list-unstyled list mb-0">
                          <li className="py-2 mb-1 border-bottom">
                              <a href="#" className="d-flex">
                                  <div className="avatar rounded-circle no-thumbnail"><i className="fa fa-thumbs-up fa-lg"></i></div>
                                  <div className="flex-fill ms-3">
                                      <p className="mb-0">Your New Campaign <strong className="text-primary">Holiday Sale</strong> is approved.</p>
                                      <small>11:30 AM Today</small>
                                  </div>
                              </a>
                          </li>
                          <li className="py-2 mb-1 border-bottom">
                              <a href="#" className="d-flex">
                                  <div className="avatar rounded-circle no-thumbnail"><i className="fa fa-pie-chart fa-lg"></i></div>
                                  <div className="flex-fill ms-3">
                                      <p className="mb-0">Website visits from FB is <strong className="text-danger">27% higher</strong> than last week.</p>
                                      <small>04:00 PM Today</small>
                                  </div>
                              </a>
                          </li>
                          <li className="py-2 mb-1 border-bottom">
                              <a href="#" className="d-flex">
                                  <div className="avatar rounded-circle no-thumbnail"><i className="fa fa-info-circle fa-lg"></i></div>
                                  <div className="flex-fill ms-3">
                                      <p className="mb-0">Campaign <strong className="text-primary">Holiday Sale</strong> is nearly reach budget limit.</p>
                                      <small>10:00 AM Today</small>
                                  </div>
                              </a>
                          </li>
                          <li className="py-2 mb-1 border-bottom">
                              <a href="#" className="d-flex">
                                  <div className="avatar rounded-circle no-thumbnail"><i className="fa fa-warning fa-lg"></i></div>
                                  <div className="flex-fill ms-3">
                                      <p className="mb-0"><strong className="text-warning">Error</strong> on website analytics configurations</p>
                                      <small>Yesterday</small>
                                  </div>
                              </a>
                          </li>
                      </ul>
                  </div>
                  <div className="tab-pane fade" id="Noti-tab-Logs" role="tabpanel">
                      <h4 className="color-400">No Logs right now!</h4>
                  </div>
                </div>
                <a href="#" className="btn btn-primary text-light rounded-0">View all notifications</a>
            </div>
        </div>
    </div>
  )
}

export default Notifications