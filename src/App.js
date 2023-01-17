import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './login/Login'
import Register from './register/Register'
import DoctorList from './doctor-list/DoctorList'
import DoctorDetails from './doctor-details/DoctorDetails'
import PatientDetails from './patient-details/PatientDetails'
import MedicineListFarmacy from './medicine-shop/MedicineListFarmacy'
import Checkout from './checkout/Checkout'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Routes>
              <Route 
                  exact
                  path='/register'
                  element={<Register />}
              />
              <Route 
                  exact
                  path='/'
                  element={<Register />}
                />
               <Route 
                  exact
                  path='/login'
                  element={<Login />}
                />
              <Route
                  exact
                  path='/doctor-list'
                  element={<DoctorList />}
                />
              <Route
                exact
                path='/doctor-details/:id'
               element={<DoctorDetails />}
              />
              <Route
                exact
                path='/patient-details'
               element={<PatientDetails />}
              />
              <Route
                exact
                path='/farmacy'
               element={<MedicineListFarmacy />}
              />
              <Route
                exact
                path='/checkout'
               element={<Checkout />}
              />
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}

export default App