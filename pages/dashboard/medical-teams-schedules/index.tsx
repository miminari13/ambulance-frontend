import type { NextPage } from 'next'
import Dashboard from '../../Dashboard'


const MedicalTeamsSchedules: NextPage = () => {
  return (
    <Dashboard>
      <div className="workspace px-xl-4 px-sm-2 px-0 py-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              Brigades - Doctors Schedules
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  )
}

export default MedicalTeamsSchedules
