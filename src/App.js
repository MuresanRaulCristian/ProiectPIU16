import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './login/Login'
import Graph from './graphs/Graph'
import Graph1 from './graphs/Graph1'
import Register from './register/Register'
import DeepAnalysis from "./deepanalysis/Form";
import AnalysisResult from './deepanalysis/AnalysisResult'
import "./App.css"
import AdminHome from './admin-home'
import PacientHome from './pacient-home'
import Devices from './devices-map/devices'
import PacientChat from './pacient-chat/pacient-chat'
import AdminChat from './admin-chat/admin-chat'

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
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}

export default App