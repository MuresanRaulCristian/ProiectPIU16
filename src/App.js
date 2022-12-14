import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './login/Login'
import Register from './register/Register'
import AdminHome from './admin-home'
import PacientHome from './pacient-home'

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
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}

export default App