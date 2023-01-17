import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './login/Login'
import Graph from './graphs/Graph'
import Graph1 from './graphs/Graph1'
import Register from './register/Register'
import DoctorList from './doctor-list/DoctorList'
import DoctorDetails from './doctor-details/DoctorDetails'
import PatientDetails from './patient-details/PatientDetails'
import MedicineListFarmacy from './medicine-shop/MedicineListFarmacy'
import Checkout from './checkout/Checkout'
import DeepAnalysis from "./deepanalysis/Form";
import AnalysisResult from './deepanalysis/AnalysisResult'
import "./App.css"
import AdminHome from './admin-home'
import PacientHome from './pacient-home'
import Devices from './devices-map/devices'
import PacientChat from './pacient-chat/pacient-chat'
import AdminChat from './admin-chat/admin-chat'
import Emergency from './emergency/Emergency'
import EmergencyCall from './emergency/EmergencyCall'
import ReviewForm from './pacient-forms/review-form'
import Form from './pacient-forms/form'


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
                  element={<AdminHome />}
                />
                <Route 
                  exact
                  path='/pacient'
                  element={<PacientHome />}
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

                   <Route 
                  exact
                  path='/graphs'
                  element={<Graph />}
                />
                <Route
                    exact
                    path='/graph/:id'
                    element={<Graph1 />}
                />
                <Route
                    exact
                    path='/analysis'
                    element={<DeepAnalysis />}
                />
                <Route
                    exact
                    path='/analysis/result'
                    element={<AnalysisResult />}
                />
                <Route
                    exact
                    path='/emergency'
                    element={<Emergency />}
                />
                <Route 
                  exact
                  path='/emergency/call'
                  element={<EmergencyCall />}
                />
                <Route 
                  exact
                  path='/devices'
                  element={<Devices />}
                />
                 <Route 
                  exact
                  path='/pacient/chat'
                  element={<PacientChat />}
                />
                 <Route 
                  exact
                  path='/messages'
                  element={<AdminChat />}
                />

                <Route 
                  exact
                  path='/pacient/review-form'
                  element={<ReviewForm />}
                />
                <Route 
                  exact
                  path='/pacient/form'
                  element={<Form />}
                />
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}

export default App